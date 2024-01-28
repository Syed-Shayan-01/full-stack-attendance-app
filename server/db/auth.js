const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://MyPrac:1234@cluster0.olutjd9.mongodb.net/Student?retryWrites=true&w=majority`);
console.log('Database Connected');

module.exports = mongoose;