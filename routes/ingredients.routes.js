const express = require('express')
const router = express.Router()

const { createIngredient } = require('../controllers/ingredient.controller')

router.post('/', createIngredient)

router.patch('/:id', (req, res) => {
    res.send('Patch ingredient')
})

router.delete('/:id', (req, res) => {
    res.send('Delete ingredient')
})

router.get('/', (req, res) => {
    res.send('Get all ingredients')
})

module.exports = router
