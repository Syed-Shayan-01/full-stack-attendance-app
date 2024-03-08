const Attend = require('../models/attendSchema');
const cloudinary = require('cloudinary');
const fs = require('fs-extra')
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
const createUser = async (req, res) => {
    try {
        const { imageUrl, name, email, password, course, phoneNumber } = req.body;

        const file = req.files.image;
        await cloudinary.v2.uploader.upload(file.tempFilePath, (error, result) => {
            fs.remove(`./tmp/`, (err) => {
                if (err) {
                    return res.status(404).send({ status: 404, message: 'File Not removed' })
                }
                else {
                    return res.status(200).send({
                        status: 200, message: 'File removed'
                    });
                };
            })
            if (error) {
                return res.status(400).send({ status: 400, message: "Image not upload in cloudinary" })
            }

            if (result) {
                return res.status(200).send({ imageUrl: result.url })
            }
        });
        const emailFind = await Attend.findOne({ email });

        if (emailFind) {
            return res.status(400).send({ status: 400, message: "Email Already Exist" });
        }
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

// create update api this api use for student data updated 
const attendUpdateUser = async (req, res) => {
    try {
        const update = await Attend.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body });

        if (!update) {
            return res.status(400).json({ status: 400, message: 'User not updated' });
        }

        return res.status(200).json({ status: 200, message: 'User successfully updated' });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

// create delete api 
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

// all users data provided in this api

const getAttendUser = async (req, res) => {
    try {
        const allUsers = await Attend.find();

        return res.status(200).send(allUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
}

module.exports = { createUser, getAttendUser, attendUpdateUser, deleteUser }