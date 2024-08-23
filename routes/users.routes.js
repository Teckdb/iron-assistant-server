const router = require("express").Router()
const isAuthenticated = require("../middleware/verifyToken")

const {
  getAllUsers,
  searchUsers,
  getUserById,
  deleteUserById } = require('./../controllers/users.controllers')

router.get("/", isAuthenticated, getAllUsers)

router.get("/search", isAuthenticated, searchUsers)

router.get("/:id", isAuthenticated, getUserById)

router.delete("/:id", isAuthenticated, deleteUserById)

module.exports = router
