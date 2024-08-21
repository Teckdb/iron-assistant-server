const router = require('express').Router()
const isAuthenticated = require('../middleware/verifyToken')

const { signupNewUser, loginByUser, verifyToken } = require('./../controllers/auth.controllers')

router.post('/signup', signupNewUser)

router.post('/login', loginByUser)

router.get('/verify', isAuthenticated, verifyToken)

module.exports = router

