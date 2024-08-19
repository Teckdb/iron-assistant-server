const Automation = require('./../models/Automation.model')

const postAutomation = (req, res, next) => {

    const { name, icon, devices, user } = req.body

    Automation
        .create({ name, icon, devices, user })
        .then(newAutomation => res.json(newAutomation))
        .catch(err => next(err))
}

const searchAutomationByName = (req, res, next) => {

    const { name } = req.query

    let automationFilter = {}

    if (name) automationFilter.name = new RegExp(name, 'i')

    Automation
        .find(automationFilter)
        .then(automations => res.json(automations))
        .catch(err => next(err))

}

const getAutomations = (req, res, next) => {

    Automation
        .find()
        .then(automations => res.json(automations))
        .catch(err => next(err))
}

const getAutomationById = (req, res, next) => {

    const { _id: automationId } = req.params

    Automation
        .findById(automationId)
        .then(automation => res.json(automation))
        .catch(err => next(err))
}

const putAutomation = (req, res, next) => {

    const { _id: automationId } = req.params
    const { name, icon, devices, user } = req.body

    Automation
        .findByIdAndUpdate(automationId, { name, icon, devices, user }, { new: true })
        .then(automation => res.json(automation))
        .catch(err => next(err))
}

const deleteAutomation = (req, res, next) => {
    const { _id: automationId } = req.params

    Automation
        .findByIdAndDelete(automationId)
        .then(automation => res.json(automation))
        .catch(err => next(err))
}

module.exports = {
    postAutomation,
    searchAutomationByName,
    getAutomations,
    getAutomationById,
    putAutomation,
    deleteAutomation
}