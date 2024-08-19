const Automation = require('./../models/Automation.model')

const postAutomation = (req, res, next) => {

    const { name, icon, devices, user } = req.body

    Automation
        .create({ name, icon, devices, user })
        .then(newAutomation => res.json(newAutomation))
        .catch(err => next(err))
}

const searchAutomations = (req, res, next) => {

    const { name } = req.query

    let automationFilter = {}

    if (name) automationFilter.name = new RegExp(name, 'i')

    Automation
        .find(automationFilter)
        .select({ name })
        .sort({ name: 1 })
        .then(automation => res.json(automation))
        .catch(err => next(err))

}

const getAutomations = (req, res, next) => {

    Automation
        .find()
        .select({ name: 1 })
        .sort({ name: 1 })
        .then(Automations => res.json(Automations))
        .catch(err => next(err))
}

const getAutomationById = (req, res, next) => {

    const { _id: AutomationId } = req.params

    Automation
        .findById(AutomationId)
        .select({ name: 1 })
        .sort({ name: 1 })
        .then(Automation => res.json(Automation))
        .catch(err => next(err))
}

const putAutomation = (req, res, next) => {

    const { _id: AutomationId } = req.params
    const { name, icon, devices, user } = req.body

    Automation
        .findByIdAndUpdate(AutomationId, { name, icon, devices, user }, { new: true })
        .then(Automation => res.json(Automation))
        .catch(err => next(err))
}

const deleteAutomation = (req, res, next) => {
    const { _id: AutomationId } = req.params

    Automation
        .findByIdAndDelete(AutomationId)
        .then(Automation => res.json(Automation))
        .catch(err => next(err))
}

module.exports = {
    postAutomation,
    searchAutomations,
    getAutomations,
    getAutomationById,
    putAutomation,
    deleteAutomation
}