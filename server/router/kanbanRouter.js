const router = require('express').Router()
const KanbanController = require('../controller/KanbanController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.post('/', KanbanController.create)
router.get('/', KanbanController.findAll)
router.get('/:id', authorization, KanbanController.findByPk)
router.put('/:id', authorization, KanbanController.update)
router.delete('/:id',authorization, KanbanController.delete)

module.exports = router