const router = require("express").Router()
const isAuthenticated = require("../middleware/verifyToken")

const cloudinary = require("cloudinary").v2;


router.post("/images", isAuthenticated,

    getAllUsers = (req, res, next) => {
        User
            .find()
            .select({ email: 1 })
            .sort({ email: 1 })
            .then(response => res.json(response))
            .catch(err => next(err))
    }

)



module.exports = router
