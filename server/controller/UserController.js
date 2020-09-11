const { User } = require('../models/')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

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

    static async googleSign(req, res, next) {
        let { idToken } = req.body
        try {
        const client = new OAuth2Client(process.env.CLIENT_GOOGLE_ID);
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.CLIENT_GOOGLE_ID,
        });
        const payload = ticket.getPayload();
        const user = await User.findOne({
            where : {
            email: payload.email
            }
        })
        if(user) {
            const access_token = generateToken({
            id: user.id,
            email: user.email
            })
            res.status(200).json({
                message: 'login success',
                email: user.email,
                access_token
            })
        } else {
            const newUser = await User.create({
            email: payload.email,
            password: 'googlelogin',
            organization:'Hacktiv8'
            })
            const access_token = generateToken({
            id: newUser.id,
            email: newUser.email,
            organization: newUser.organization
            })
            res.status(200).json({
                message: 'login success',
                email: payload.email,
                access_token
            })
        }
        } catch(err) {
            next(err)
        }
    }
}

module.exports = UserController