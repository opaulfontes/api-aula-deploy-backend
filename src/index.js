require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json('Api está ok!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})