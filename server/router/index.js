const router = require('express').Router()
const kanbanRouter = require('./kanbanRouter')
const userRouter = require('./userRouter')

router.use('/', userRouter)
router.use('/kanban', kanbanRouter)

module.exports = router