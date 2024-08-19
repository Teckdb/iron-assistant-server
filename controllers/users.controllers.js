const User = require('./../models/User.model')

const getAllUsers = (req, res, next) => {
    User
        .find()
        .select({ email: 1 })
        .sort({ email: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const searchUsers = (req, res, next) => {
    const email = req.query.email

    User
        .find({ email: new RegExp(email, 'i') })
        .select({ email: 1 })
        .sort({ email: 1 })
        .then(users => res.status(200).json(users))
        .catch(err => next(err))
}

const getUserById = (req, res, next) => {
    const { id: userId } = req.params

    User
        .findById(userId)
        .select({ email: 1 })
        .sort({ email: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteUserById = (req, res, next) => {
    const { id: userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    searchUsers,
    getUserById,
    deleteUserById
}
