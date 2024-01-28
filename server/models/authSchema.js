const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin: Boolean,
})

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;