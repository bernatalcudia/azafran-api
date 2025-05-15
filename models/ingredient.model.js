const mongoose = require('mongoose')
const { Schema } = mongoose

const ingredientSchema = new Schema({
    name: { type: String, required: true }
})
