const router = require("express").Router()

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

router.post("/", postAutomation)

router.put("/:_id", putAutomation)

router.delete("/:_id", deleteAutomation)

module.exports = router