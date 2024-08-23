const router = require("express").Router()

const isAuthenticated = require("../middleware/verifyToken")
const {
    searchAreas,
    postArea,
    getAreas,
    getAreaById,
    putArea,
    deleteArea } = require('./../controllers/areas.controllers')

router.get('/', isAuthenticated, getAreas)

router.get('/search', isAuthenticated, searchAreas)

router.get('/:_id', isAuthenticated, getAreaById)

router.post("/", isAuthenticated, isAuthenticated, postArea)

router.put("/:_id", isAuthenticated, putArea)

router.delete("/:_id", isAuthenticated, deleteArea)

module.exports = router





