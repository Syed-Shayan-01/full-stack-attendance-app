const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv').config();
const indexRouter = require('./routes/index');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// app.use('/', indexRouter)
app.get('/', (req, res, next) => {
    res.send('Hello Shayan');
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});