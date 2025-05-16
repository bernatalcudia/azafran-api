const { Ingredient } = require('../models/ingredient.model')

const createIngredient = async (req, res) => {
    try {
        const createdIngredient = new Ingredient(req.body)
        await createdIngredient.save()
        res.send(createIngredient)
    } catch (error) {
        console.log(error)
        res.status(404).send({ error: error.name, message: error._message })
    }
}

module.exports = { createIngredient }