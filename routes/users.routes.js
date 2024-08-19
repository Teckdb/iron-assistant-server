const router = require("express").Router()
const User = require("./../models/User.model")
const {
  getAllUsers,
  searchUsersByEmail,
  getUsersById,
  deleteUserById } = require('./../controllers/users.controllers')

router.get("/", getAllUsers)

router.get("/search", searchUsersByEmail)

router.get("/:id", getUsersById)

router.delete("/:id", deleteUserById)

module.exports = router
