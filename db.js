const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database connected')
    } catch (error) {
        console.error(error)
        throw new Error('Error at connect to DataBase')
    }
}

module.exports = { dbConnection }