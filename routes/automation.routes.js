const router = require("express").Router()

const isAuthenticated = require("../middleware/verifyToken")
const {
    postAutomation,
    searchAutomations,
    getAutomations,
    getAutomationById,
    putAutomation,
    deleteAutomation } = require('./../controllers/automations.controlles')

router.get('/', getAutomations)

router.get("/search", searchAutomations)

router.get('/:_id', getAutomationById)

router.post("/", isAuthenticated, postAutomation)

router.put("/:_id", isAuthenticated, putAutomation)

router.delete("/:_id", isAuthenticated, deleteAutomation)

module.exports = router