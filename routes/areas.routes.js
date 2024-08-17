const router = require("express").Router()

const { response } = require("express")
const Area = require('./../models/Area.model')


router.post('/areas', (req, res, next) => {

    res.send('lol')

    // Area
    // .create

})

// router.get('/areas', (req, res, next) => {

//     res.send('hola')

//     // Area
//     //     .find()
//     //     .select()
//     //     .sort()
//     //     .then(response => res.json(response))
//     //     .catch(err => next(err))

// })





