const Area = require('./../models/Area.model')
const Device = require('./../models/Device.model')

const postArea = (req, res, next) => {

    const { name, icon, floor, picture, selectedDevices } = req.body
    const { _id } = req.payload

    Area
        .create({ name, icon, floor, picture, owner: _id, devices: selectedDevices })
        .then((area) => res.status(201).json(area))
        .catch(err => next(err))
}

const searchAreas = (req, res, next) => {
    const { name, floor } = req.query

    let areaFilter = {}

    if (name) areaFilter.name = new RegExp(name, 'i')

    if (floor) areaFilter.floor = new RegExp(floor, 'i')

    Area
        .find(areaFilter)
        .select({ name })
        .sort({ name: 1 })
        .then(areas => res.json(areas))
        .catch(err => next(err))

}

const getAreas = (req, res, next) => {

    Area
        .find()
        .select({ name: 1, floor: 1, devices: 1, icon: 1 })
        .populate("devices")
        .sort({ name: 1 })
        .then(areas => res.json(areas))
        .catch(err => next(err))
}

const getAreaById = (req, res, next) => {

    const { _id: areaId } = req.params

    Area
        .findById(areaId)
        .select({ name: 1, devices: 1, picture: 1, floor: 1, icon: 1 })
        .sort({ name: 1 })
        .populate('devices')
        .then(area => res.json(area))
        .catch(err => next(err))
}

const putArea = (req, res, next) => {

    const { _id: areaId } = req.params;
    const { name, icon, floor, picture, selectedDevices } = req.body;

    Area
        .findById(areaId)
        .populate('devices')
        .then(area => {
            const currentDeviceIds = area.devices.map(device => device._id.toString());

            const removedDevices = currentDeviceIds.filter(deviceId => !selectedDevices.includes(deviceId));

            const addedDevices = selectedDevices.filter(deviceId => !currentDeviceIds.includes(deviceId));

            return Device
                .updateMany(
                    { _id: { $in: removedDevices } },
                    { $set: { area: null } }
                )
                .then(() => {
                    return Device.updateMany(
                        { _id: { $in: addedDevices } },
                        { $set: { area: areaId } }
                    );
                })
                .then(() => {
                    area.name = name;
                    area.icon = icon;
                    area.floor = floor;
                    area.picture = picture;
                    area.devices = selectedDevices;
                    return area.save();
                })
        })
        .then(updatedArea => res.json(updatedArea))
        .catch(err => next(err));
}

const deleteArea = (req, res) => {

    const { _id: areaId } = req.params

    Area
        .findByIdAndDelete(areaId)
        .then(area => res.json(area))
        .catch(err => next(err))
}

module.exports = {
    searchAreas,
    postArea,
    getAreas,
    getAreaById,
    putArea,
    deleteArea
}