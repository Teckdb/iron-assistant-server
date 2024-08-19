const Device = require('./../models/Device.model')

const getAllDevices = (req, res, next) => {
    Device
        .find()
        .select({ name: 1, deviceType: 1 })
        .sort({ name: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const searchDevicesByNameOrDeviceType = (req, res, next) => {
    const { name, deviceType } = req.query
    let searchCriteria = {}
    if (name) { searchCriteria.name = new RegExp(name, 'i') }
    if (deviceType) { searchCriteria.deviceType = new RegExp(deviceType, 'i') }
    Device
        .find(searchCriteria)
        .then(devices => res.status(200).json(devices))
        .catch(err => next(err))
}

const getDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params

    Device
        .findById(deviceId)
        .then(device => res.json(device))
        .catch(err => next(err))
}

const postNewDevice = (req, res, next) => {
    const { name, icon, deviceType, logicFuction, area } = req.body

    Device
        .create({ name, icon, deviceType, logicFuction, area })
        .then(response => res.sendStatus(201))
        .catch(err => next(err))
}

const putEditDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params
    const { name, icon, deviceType, logicFuction, area } = req.body

    Device
        .findByIdAndUpdate(deviceId, { name, icon, deviceType, logicFuction, area })
        .then(response => res.sendStatus(200))
        .catch(err => next(err))
}

const deleteDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params

    Device
        .findByIdAndDelete(deviceId)
        .then(response => res.sendStatus(200).json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllDevices,
    searchDevicesByNameOrDeviceType,
    getDeviceById,
    postNewDevice,
    putEditDeviceById,
    deleteDeviceById
}