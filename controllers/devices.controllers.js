const Device = require('./../models/Device.model')
const User = require('./../models/User.model')

const getAllDevices = (req, res, next) => {

    Device
        .find()
        .select({ name: 1, deviceType: 1, owner: 1, area: 1, email: 1, picture: 1 })
        .sort({ name: 1 })
        .populate('area')
        .lean()
        .then(devices => {
            const devicePromises = devices.map(device => {
                return User
                    .findById(device.owner)
                    .select('email')
                    .then(user => {
                        device.ownerEmail = user ? user.email : null
                        return device
                    })
            })
            return Promise.all(devicePromises)
        }
        )
        .then(devicesWithEmails => res.json(devicesWithEmails))
        .catch(err => next(err))
}

const searchDevices = (req, res, next) => {
    const { name, deviceType } = req.query
    let searchCriteria = {}
    if (name) { searchCriteria.name = new RegExp(name, 'i') }
    if (deviceType) { searchCriteria.deviceType = new RegExp(deviceType, 'i') }
    Device
        .find(searchCriteria)
        .select({ name: 1, deviceType: 1 })
        .sort({ name: 1 })
        .then(devices => res.json(devices))
        .catch(err => next(err))
}

const searchAvailableDevices = (req, res, next) => {

    Device
        .find({
            $or: [
                { area: { $exists: false } },
                { area: null }
            ]
        })
        .select({ name: 1, deviceType: 1 })
        .sort({ name: 1 })
        .then(devices => res.json(devices))
        .catch(err => next(err))
}

const getDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params

    Device
        .findById(deviceId)
        .select({ name: 1, deviceType: 1, picture: 1 })
        .sort({ name: 1 })
        .then(device => res.json(device))
        .catch(err => next(err))
}

const toggleDeviceStatusController = (req, res, next) => {

    const { id: deviceId } = req.params
    const { brightness } = req.body

    Device
        .findByIdAndUpdate(deviceId, { brightness })
        .then(() => {
            res.json({ message: 'Device status updated', result })
        })
        .catch(err => next(err))
}

const postNewDevice = (req, res, next) => {
    const { name, icon, deviceType, logicFuction, area, brightness, temperature, picture } = req.body
    const { _id } = req.payload

    Device
        .create({ name, icon, deviceType, logicFuction, area, brightness, temperature, picture, owner: _id })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const putEditDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params
    const { name, icon, deviceType, logicFuction, area } = req.body

    Device
        .findByIdAndUpdate(deviceId, { name, icon, deviceType, logicFuction, area })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const deleteDeviceById = (req, res, next) => {
    const { id: deviceId } = req.params

    Device
        .findByIdAndDelete(deviceId)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllDevices,
    searchAvailableDevices,
    searchDevices,
    getDeviceById,
    toggleDeviceStatusController,
    postNewDevice,
    putEditDeviceById,
    deleteDeviceById
}