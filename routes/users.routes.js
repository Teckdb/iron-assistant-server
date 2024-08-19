const router = require("express").Router()

const {
  getAllUsers,
  searchUsers,
  getUserById,
  deleteUserById } = require('./../controllers/users.controllers')

router.get("/", getAllUsers)

router.get("/search", searchUsers)

router.get("/:id", getUserById)

router.delete("/:id", deleteUserById)

module.exports = router
