const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: 'dsvyez2w5',
    api_key: 627832341479357,
    api_secret: 'aK6Hr4XhB8tiDKqeelYrlDkMClg',
    secure: true
})

const storage = new CloudinaryStorage({ cloudinary })

module.exports = multer({ storage })