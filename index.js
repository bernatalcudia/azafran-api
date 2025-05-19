const port = 8000

const cors = require('cors')
const express = require('express')
const { dbConnection } = require('./db')
const { auth } = require('./middlewares/auth')

const recipesRoutes = require('./routes/recipes.routes')
const ingredientsRoutes = require('./routes/ingredients.routes')
const usersRoutes = require('./routes/users.routes')


const main = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use('/recipes', recipesRoutes)
    app.use('/ingredients', ingredientsRoutes)
    app.use('/', usersRoutes)

    dbConnection()

    app.listen(port, () => {
        console.log(` App listening on port:${port}`)
    })
}

main()