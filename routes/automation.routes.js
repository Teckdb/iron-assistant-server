const router = require("express").Router()

const isAuthenticated = require("../middleware/verifyToken")
const {
    postAutomation,
    searchAutomations,
    getAutomations,
    getAutomationById,
    putAutomation,
    deleteAutomation } = require('./../controllers/automations.controlles')

router.get('/', isAuthenticated, getAutomations)

router.get("/search", isAuthenticated, searchAutomations)

router.get('/:_id', isAuthenticated, getAutomationById)

router.post("/", isAuthenticated, postAutomation)

router.put("/:_id", isAuthenticated, putAutomation)

router.delete("/:_id", isAuthenticated, deleteAutomation)

module.exports = router