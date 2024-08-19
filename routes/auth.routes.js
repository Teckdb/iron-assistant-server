const router = require('express').Router()

const { signupNewUser, loginByUser, verifyToken } = require('./../controllers/auth.controllers')

router.post('/signup', signupNewUser)

router.post('/login', loginByUser)

router.get('/verify', verifyToken)

module.exports = router

