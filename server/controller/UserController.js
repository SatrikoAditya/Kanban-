const { User } = require('../models/')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let {email, password} = req.body
        User.create({
            email, password, organization:'Hacktiv8'
        })
        .then(data => {
            res.status(201).json({
                message: 'register user success',
                id: data.id,
                email: data.email,
                organization: data.organization
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then(data => {
            if(!data) {
                throw {name: 'LOGIN_FAILED'}
            } else {
                let comparePassword = comparePass(password, data.password)
                if(!comparePassword) {
                    throw {name: 'LOGIN_FAILED'}
                } else {
                    let payload = {
                        id: data.id,
                        email: data.email,
                        organization: data.organization
                    }
                    let access_token = generateToken(payload)
                    res.status(200).json({
                        message: 'login success',
                        email: data.email,
                        access_token
                    })
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController