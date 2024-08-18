const Device = require('./../models/Device.model')

exports.searchByNameOrDeviceType = async (req, res) => {
    try {

        const { name, deviceType } = req.query

        let searchCriteria = {}

        if (name) searchCriteria.name = new RegExp(name, 'i')

        if (deviceType) searchCriteria.deviceType = new RegExp(deviceType, 'i')

        const devices = await Device.find(searchCriteria)
        res.status(200).json(devices)
    } catch (error) {
        res.status(500).json({ message: 'Error in user search' })
    }
}

