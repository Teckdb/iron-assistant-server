const router = require("express").Router()
const Device = require('./../models/Device.model')
const deviceController = require('./../lib/deviceController')

router.get("/", (req, res, next) => {
  Device
    .find()
    .select({ name: 1, deviceType: 1 })
    .sort({ name: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get("/search", deviceController.searchByNameOrDeviceType)

router.get("/:id", (req, res, next) => {
  const { id: deviceId } = req.params

  Device
    .findById(deviceId)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/", (req, res, next) => {
  const { name, icon, deviceType, logicFuction, area } = req.body

  Device
    .create({ name, icon, deviceType, logicFuction, area })
    .then(response => res.sendStatus(201))
    .catch(err => next(err))
})

router.put("/:id", (req, res, next) => {
  const { id: deviceId } = req.params
  const { name, icon, deviceType, logicFuction, area } = req.body

  Device
    .findByIdAndUpdate(deviceId, { name, icon, deviceType, logicFuction, area })
    .then(response => res.sendStatus(200))
    .catch(err => next(err))
})

router.delete("/:id", (req, res, next) => {
  const { id: deviceId } = req.params

  Device
    .findByIdAndDelete(deviceId)
    .then(response => res.sendStatus(200).json(response))
    .catch(err => next(err))
})

module.exports = router
