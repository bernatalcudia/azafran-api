const { User } = require('../models/user.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config.js')

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(404).send('Missing username or password')
        return
    }

    const user = await User.findOne({ username: username })

    if (!user) {
        res.status(404).send({ msg: 'invalid credentials' })
        return
    }

    const isPasswordMatch = bcryptjs.compareSync(password, user.password)
    if (!isPasswordMatch) {
        res.status(404).send({ msg: 'invalid credentials' })
        return
    }

    const accessToken = jwt.sign({ userId: user._id }, JWT_SECRET)
    res.send({ accessToken })
}


const register = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(404).send('Missing username or password')
    }

    const hashedPassword = bcryptjs.hashSync(password)

    try {
        const user = new User({ username: username, password: hashedPassword })
        await user.save()
        res.status(201).send('user registered', user)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { login, register }