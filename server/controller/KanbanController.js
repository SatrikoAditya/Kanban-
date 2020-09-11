const { Kanban } = require('../models/')

class KanbanController {
    static create(req, res, next) {
        let {title, description, category} = req.body
        const userId = req.loginUser.id
        const userEmail = req.loginUser.email
        Kanban.create({
            title, description, category, userId, userEmail
        })
        .then(data => {
            res.status(201).json({
                message: 'Success create new kanban',
                data
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static findAll(req, res, next) {
        Kanban.findAll()
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Kanban.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({msg:'success delete data'})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }

    static findByPk(req, res, next) {
        const { id } = req.params
        Kanban.findByPk(id)
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static update(req, res, next) {
        let { title, description, category } = req.body
        const { id } = req.params
        Kanban.update({
            title, description, category
        }, {
            where: {
                id
            }
        }, {
            validate: true
        })
        .then(data => {
            res.status(200).json({message: 'success edit data'})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = KanbanController