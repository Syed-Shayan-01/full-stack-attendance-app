require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
const mongoose = require('./db/auth')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const attendRouter = require('./routes/attend')
var bodyParser = require('body-parser');
const verifyToken = require('./middlewares/verify');
app.use(fileUpload({
    useTempFiles: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.use('/', indexRouter)
app.use('/', attendRouter)
app.use('/auth', authRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
