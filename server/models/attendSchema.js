const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendScehma = new Schema({
    isImage: { type: Boolean, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    course: { type: String, required: true },
    phoneNumber: { type: String, required: true },
})

const Attend = mongoose.model('Attend', attendScehma);

module.exports = Attend;