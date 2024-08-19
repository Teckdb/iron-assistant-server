const router = require("express").Router()
const Area = require('./../models/Area.model')

router.post("/", (req, res) => {

    const { name, icon, floor, picture } = req.body

    Area
        .create({ name, icon, floor, picture })
        .then(newArea => res.json(newArea))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while creating the area", details: err }))

})

router.get('/', (req, res, next) => {

    Area
        .find()
        .then(areas => res.json(areas))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the areas", details: err }))

})

router.get('/:_id', (req, res, next) => {

    const { _id: areaId } = req.params

    Area
        .findById(areaId)
        .then(area => res.json(area))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the area", details: err }))

})

router.put("/:_id", (req, res) => {

    const { _id: areaId } = req.params
    const { name, icon, floor, picture } = req.body

    Area
        .findByIdAndUpdate(areaId, { name, icon, floor, picture }, { new: true })
        .then(area => res.json(area))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while editing the area", details: err }))
})

router.delete("/:_id", (req, res) => {
    const { _id: areaId } = req.params

    Area
        .findByIdAndDelete(areaId)
        .then(area => res.json(area))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while deleting the area", details: err }))

})

router.get('/search', (req, res) => {
    const { name, floor } = req.query

    const filter = {}
    if (name) filter.name = new RegExp(name, 'i')
    if (floor) filter.floor = floor

    Area.find(filter)
        .then(areas => res.json(areas))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while searching the areas", details: err }))
})

module.exports = router





