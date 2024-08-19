const router = require("express").Router()

const {
  searchDevices,
  getAllDevices,
  getDeviceById,
  postNewDevice,
  putEditDeviceById,
  deleteDeviceById } = require('./../controllers/devices.controllers')

router.get("/", getAllDevices)

router.get("/search", searchDevices)

router.get("/:id", getDeviceById)

router.post("/", postNewDevice)

router.put("/:id", putEditDeviceById)

router.delete("/:id", deleteDeviceById)

module.exports = router
