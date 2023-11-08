require('dotenv').config()
const express = require('express')
const knex = require('./conexao')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json('Api está ok - HEROKU CLI!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})