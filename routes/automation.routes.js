const router = require("express").Router()

const { response } = require("express")
const Automation = require('./../models/Automation.model')

router.post("/", (req, res) => {

    const { name, icon, devices, user } = req.body

    Automation
        .create({ name, icon, devices, user })
        .then(newAutomation => res.json(newAutomation))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while creating the automation", details: err }))

})

router.get('/', (req, res, next) => {


    Automation
        .find()
        .then(Automations => res.json(Automations))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the Automations", details: err }))

})


router.get('/:_id', (req, res, next) => {

    const { _id: AutomationId } = req.params

    Automation
        .findById(AutomationId)
        .then(Automation => res.json(Automation))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the Automation", details: err }))

})

router.put("/:_id", (req, res) => {

    const { _id: AutomationId } = req.params
    const { name, icon, devices, user } = req.body

    Automation
        .findByIdAndUpdate(AutomationId, { name, icon, devices, user }, { new: true })
        .then(Automation => res.json(Automation))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while editing the Automation", details: err }))
})

router.delete("/:_id", (req, res) => {
    const { _id: AutomationId } = req.params

    Automation
        .findByIdAndDelete(AutomationId)
        .then(Automation => res.json(Automation))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while deleting the Automation", details: err }))

})

module.exports = router