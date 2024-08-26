const router = require("express").Router()

const isAuthenticated = require("../middleware/verifyToken")
const {
  searchDevices,
  searchAvailableDevices,
  getAllDevices,
  getDeviceById,
  toggleDeviceStatusController,
  postNewDevice,
  putEditDeviceById,
  deleteDeviceById } = require('./../controllers/devices.controllers')

router.get("/", isAuthenticated, getAllDevices)

router.get("/available", isAuthenticated, searchAvailableDevices)

router.get("/search", isAuthenticated, searchDevices)

router.get("/:id", isAuthenticated, getDeviceById)

router.post("/", isAuthenticated, postNewDevice)

router.put("/toggle/:id", isAuthenticated, toggleDeviceStatusController)

router.put("/:id", isAuthenticated, putEditDeviceById)

router.delete("/:id", isAuthenticated, deleteDeviceById)

module.exports = router
