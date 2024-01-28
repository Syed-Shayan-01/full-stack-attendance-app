const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@cluster0.olutjd9.mongodb.net/STUDENT?retryWrites=true&w=majority`);
console.log('Database Connected');

module.exports = mongoose;