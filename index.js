const port = 8000

const cors = require('cors')
const express = require('express')
const { dbConnection } = require('./db')


const main = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    dbConnection()

    app.listen(port, () => {
        console.log(` App listening on port:${port}`)
    })
}

main()