const jsonwebtoken = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const { User } = require('../models/user.model')

const auth = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).send('Missing auth header')
        return
    }
    let payload
    try {
        payload = jsonwebtoken.verify(token, JWT_SECRET)
    } catch (error) {
        res.status(401).send('Invalid auth header')
    }
    const userId = payload.userId
    const user = await User.findById(userId)
    if (!user) {
        res.status(401).send('Invalid user')
        return
    }
    req.user = user
    next()
}

module.exports = { auth }