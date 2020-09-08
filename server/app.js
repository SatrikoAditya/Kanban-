require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./router/index')
const erorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(erorHandler)


app.listen(PORT, () => {
    console.log(`Kanban app is listen on port ${PORT}`)
})