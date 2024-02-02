const Attend = require('../models/attendSchema');
const fs = require('fs-extra');
const path = require('path')
const cloudinary = require('cloudinary')
const filePath = path.join(process.cwd(), 'public', 'images');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${filePath}/`)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage });

cloudinary.config({
    cloud_name: 'disalrbow',
    api_key: '954531178124367',
    api_secret: '1Q4mDQGxsBIm8eGkxs5MorgAY8Q'
});


const uploadImage = async () => {
    return new Promise((reslove, reject) => {
        fs.readdirSync(`${filePath}/`).forEach((file) => {
            cloudinary.v2.uploader.upload(`${filePath}/${file}`, (error, result) => {
                fs.remove(`${filePath}/${file}`, err => {
                    if (err) {
                        reject(err)

                    }
                })
                if (error) {
                    reject(error)
                } else {
                    console.log(result.url)
                }


            })
        });
    })
}
const createUser = async (req, res) => {

    const { isImage, name, email, password, course, phoneNumber } = req.body;

    const emailFind = await Attend.findOne({ email });

    if (emailFind) {
        return res.status(400).send({ status: 400, message: "Email Already Exist" });
    }

    const saveData = new Attend({
        isImage, name, email, password, course, phoneNumber
    })
}


module.exports = { uploadImage, upload }