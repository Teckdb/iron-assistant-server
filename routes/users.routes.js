const router = require("express").Router()

const User = require("./../models/User.model")

router.get("/", (req, res, next) => {
  User
    .find()
    .select({ email: 1 })
    .sort({ email: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))

})

router.get("/search", (req, res, next) => {

})

router.get("/:id", (req, res, next) => {
  const { id: userId } = req.params

  User
    .findById(userId)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/", (req, res, next) => {
  const { email, password, role } = req.body

  User
    .create({ email, password, role })
    .then(response => res.sendStatus(201))
    .catch(err => next(err))
})

router.put("/:id", (req, res, next) => {
  const { id: userId } = req.params
  const { email, password, role } = req.body

  User
    .findByIdAndUpdate(userId, { email, password, role })
    .then(response => res.sendStatus(200))
    .catch(err => next(err))

})

router.delete("/:id", (req, res, next) => {
  const { id: userId } = req.params

  User
    .findByIdAndDelete(userId)
    .then(response => res.sendStatus(200).json(response))
    .catch(err => next(err))

})

module.exports = router
