const Auth = require("../models/authSchema");
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const { email, password, isAdmin } = req.body;

        const checkEmail = await Auth.findOne({ email });
        if (checkEmail) {
            return res.status(409).send({ status: 409, error: 'USER ALREADY EXIST' })
        }

        const hashPass = await bcrypt.hash(password, 12);

        const saveData = new Auth({
            email,
            password: hashPass,
            isAdmin: isAdmin || false
        });
        const response = await saveData.save();
        res.status(201).send({ status: 201, message: response })
    } catch (error) {
        res.status(500).send({ status: 500, error })
    }
}


module.exports = { createUser }