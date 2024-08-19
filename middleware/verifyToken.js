const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const validTokenPayload = jwt.verify(token, process.env.TOKEN_SECRET)
        req.payload = validTokenPayload
        next()
    } catch (err) {
        res.json('token not provided or not valid')
        next(err)
    }
}

module.exports = isAuthenticated