const Auth = require("../models/authSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { email, password, isAdmin } = req.body;
        const hashPass = await bcrypt.hash(password, 12);

        const saveData = new Auth({
            email,
            password: hashPass,
            isAdmin: isAdmin || false
        });
        const checkEmail = await Auth.findOne({ email });
        if (checkEmail) {
            return res.status(409).send({ status: 409, error: 'USER ALREADY EXIST' })
        }
        if (!isAdmin) {
            return res.status(409).send({ status: 409, error: 'Not Admin' })
        }
        const response = await saveData.save();
        return res.status(201).send({ status: 201, message: response })
    } catch (error) {
        res.status(500).send({ status: 500, error })
    }
};


const findUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userCheck = await Auth.findOne({ email });
        if (!userCheck) {
            return res.status(400).send({ status: 400, error: 'USER NOT EXIST' });
        }
        const passCom = await bcrypt.compare(password, userCheck.password);
        if (!passCom) {
            return res.status(403).send({ status: 403, error: 'Incorrect Password' });
        }
        const token = jwt.sign({ _id: userCheck._id, isAdmin: userCheck.isAdmin }, process.env.SECRET);
        return res.status(200).send({ status: 200, message: 'Success', token })
    } catch (error) {
        return res.status(500).send({ status: 500, error })
    }
}


const updateUser = async (req, res) => {
    try {
        const { password } = req.body;
        const hashPass = await bcrypt.hash(password, 12);
        const updates = await Auth.findByIdAndUpdate({ _id: req.params.id }, {password: hashPass});
        if (!updates) {
            return res.status(400).json({ status: 400, message: 'User Password not updated' });
        }

        return res.status(204).json({ status: 200, message: 'Password successfully updated' });
    } catch (err) {
        return res.status(400).send({ status: 400, message: "USER DOESN'T UPDATE" });
    }
};

module.exports = { createUser, findUser, updateUser };