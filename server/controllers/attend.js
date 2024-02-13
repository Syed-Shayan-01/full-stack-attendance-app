const Attend = require('../models/attendSchema');
const fs = require('fs-extra');
const path = require('path')
const cloudinary = require('cloudinary')
const filePath = path.join(process.cwd(), 'public', 'images');
const multer = require('multer');
const { ObjectId } = require('mongodb');

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


const uploadImage = (req, res) => {
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
                    res.status(200).send({ imageUrl: result.url })
                }


            })
        });
    })
}
const createUser = async (req, res) => {
    try {
        const { imageUrl, name, email, password, course, phoneNumber } = req.body;
        const emailFind = await Attend.findOne({ email });

        if (emailFind) {
            return res.status(400).send({ status: 400, message: "Email Already Exist" });
        }

        // if (!imageUrl) {
        //     res.status(400).send('Error image')
        // }
        const saveData = new Attend({
            isImage: imageUrl,
            name,
            email,
            password,
            course,
            phoneNumber
        });

        const response = await saveData.save();
        res.status(201).send({ status: 201, message: response });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}
const attendUpdateUser = async (req, res) => {
    try {
        const update = await Attend.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body });
        console.log(update)
        if (!update) {
            return res.status(400).json({ status: 400, message: 'User not updated' });
        }

        return res.status(200).json({ status: 200, message: 'User successfully updated' });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}


const deleteUser = async (req, res) => {
    try {
        const deleteData = await Attend.deleteOne({ _id: req.params.id }, { $set: req.body });

        if (!deleteData) {
            return res.status(400).json({ status: 400, message: 'User not Deleted' });
        }

        return res.status(200).json({ status: 200, message: 'User successfully Deleted' });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

const getAttendUser = async (req, res) => {
    try {
        const allUsers = await Attend.find();

        return res.status(200).send(allUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
}

module.exports = { uploadImage, upload, createUser, getAttendUser, attendUpdateUser, deleteUser }