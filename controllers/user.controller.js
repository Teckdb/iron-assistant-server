const User = require('./../models/User.model')

exports.searchByEmail = async (req, res) => {
    try {
        const email = req.query.email
        const users = await User.find({ email: new RegExp(email, 'i') })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error in user search' })
    }
}
