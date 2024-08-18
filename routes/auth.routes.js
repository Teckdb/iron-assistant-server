const router = require('express').Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10

const User = require('../models/User.model')
const isAuthenticated = require('../middleware/verifyToken')

router.post('/signup', (req, res, next) => {
  const { email, password, username } = req.body

  if (email === '' || password === '' || username === '') {
    res.status(400).json({ message: 'Provide a valid email address.' })
    return
  }

  if (password.length < 2) {
    res.status(400).json({ message: 'Password must have at least 3 characters' })
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (foundUser) {
        res.status(400).json({ message: 'User already exists.' })
        return
      }

      const salt = bcrypt.genSaltSync(saltRounds)
      const hashedPassword = bcrypt.hashSync(password, salt)

      User
        .create({ username, email, password: hashedPassword })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
    })
    .catch(err => next(err))
})

module.exports = router

