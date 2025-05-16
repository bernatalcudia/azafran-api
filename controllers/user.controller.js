const { User } = require('../models/user.model')
const bcryptjs = require('bcryptjs')

const login = async (req, res) => {
    const { username, password } = req.body
}


const register = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(404).send('Missing username or password')
    }

    const hashedPassword = bcryptjs.hashSync(password)

    try {

    } catch (error) {
        console.log(error)
        if (error.errorResponse.errmsg) {
            res.status(500).send(error.errorResponse.errmsg)
        } else {
            res.status(500).send('Unexpected error')
        }
    }
}


module.exports = { login, register }