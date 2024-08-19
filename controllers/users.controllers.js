const User = require('./../models/User.model')

const getAllUsers = (req, res, next) => {
    User
        .find()
        .select({ email: 1 })
        .sort({ email: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const searchUsersByEmail = (req, res, next) => {
    const email = req.query.email

    User
        .find({ email: new RegExp(email, 'i') })
        .then(users => res.status(200).json(users))
        .catch(err => next(err))
}

const getUsersById = (req, res, next) => {
    const { id: userId } = req.params

    User
        .findById(userId)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteUserById = (req, res, next) => {
    const { id: userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(response => res.sendStatus(200).json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    searchUsersByEmail,
    getUsersById,
    deleteUserById
}
