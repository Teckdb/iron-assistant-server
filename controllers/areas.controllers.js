const Area = require('./../models/Area.model')


const postArea = (req, res, next) => {

    const { name, icon, floor, picture } = req.body

    Area
        .create({ name, icon, floor, picture })
        .then(newArea => res.json(newArea))
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
        .select({ name: 1 })
        .sort({ name: 1 })
        .then(areas => res.json(areas))
        .catch(err => next(err))
}

const getAreaById = (req, res, next) => {

    const { _id: areaId } = req.params

    Area
        .findById(areaId)
        .select({ name: 1 })
        .sort({ name: 1 })
        .then(area => res.json(area))
        .catch(err => next(err))
}

const putArea = (req, res) => {

    const { _id: areaId } = req.params
    const { name, icon, floor, picture } = req.body

    Area
        .findByIdAndUpdate(areaId, { name, icon, floor, picture }, { new: true })
        .then(area => res.json(area))
        .catch(err => next(err))
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