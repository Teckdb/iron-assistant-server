const router = require("express").Router()

const isAuthenticated = require("../middleware/verifyToken")
const {
    searchAreas,
    postArea,
    getAreas,
    getAreaById,
    putArea,
    deleteArea } = require('./../controllers/areas.controllers')

router.get('/', getAreas)

router.get('/search', searchAreas)

router.get('/:_id', getAreaById)

router.post("/", isAuthenticated, postArea)

router.put("/:_id", putArea)

router.delete("/:_id", deleteArea)

module.exports = router





