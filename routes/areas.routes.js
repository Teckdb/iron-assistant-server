const router = require("express").Router()
const Area = require('./../models/Area.model')
const {
    searchByNameOrFloor,
    postArea,
    getAreas,
    getAreaById,
    putArea,
    deleteArea } = require('./../controllers/areas.controllers')

router.get('/', getAreas)

router.get('/search', searchByNameOrFloor)

router.get('/:_id', getAreaById)

router.post("/", postArea)

router.put("/:_id", putArea)

router.delete("/:_id", deleteArea)

module.exports = router





