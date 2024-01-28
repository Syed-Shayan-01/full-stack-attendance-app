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
        const response = await saveData.save();
        return res.status(201).send({ status: 201, message: response })
    } catch (error) {
        res.status(500).send({ status: 500, error })
    }
};


const findUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userCheck = await Auth.findOne({ email })
        if (!userCheck.email) {
            return res.status(404).send({ status: 404, error: 'USER NOT EXIST' });
        }
        const passCom = await bcrypt.compare(password, userCheck.password);
        if (!passCom) {
            return res.status(404).send({ status: 404, error: 'Incorrect Password' });
        }
        const token = jwt.sign({ _id: userCheck._id, isAdmin: userCheck.isAdmin }, 'gsgdgs');
        return res.status(201).send({ status: 201, message: response, token })
    } catch (error) {
        res.status(500).send({ status: 500, error })
    }
}


module.exports = { createUser, findUser }