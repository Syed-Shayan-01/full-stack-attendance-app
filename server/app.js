const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./db/auth')
const env = require('dotenv').config();
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth')
var bodyParser = require('body-parser');
const verifyToken = require('./middlewares/verify');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/', verifyToken,indexRouter)

app.use('/auth', authRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});