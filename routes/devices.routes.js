const router = require("express").Router()

const Device = require('./../models/Device.model')

router.get("/", (req, res, next) => {
  res.json("All good in here")
})

module.exports = router
