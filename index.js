const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const port = 3001

const taskRouter = require('./src/routes/user')

app.use(cors())

app.use(
    bodyParser.json({
        limit: '20mb'
}))

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})

initDB()