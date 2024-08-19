const router = require("express").Router()
const Device = require('./../models/Device.model')
const {
  searchDevicesByNameOrDeviceType,
  getAllDevices,
  getDeviceById,
  postNewDevice,
  putEditDeviceById,
  deleteDeviceById } = require('./../controllers/devices.controllers')

router.get("/", getAllDevices)

router.get("/search", searchDevicesByNameOrDeviceType)

router.get("/:id", getDeviceById)

router.post("/", postNewDevice)

router.put("/:id", putEditDeviceById)

router.delete("/:id", deleteDeviceById)

module.exports = router
