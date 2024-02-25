require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./db/auth')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const attendRouter = require('./routes/attend')
var bodyParser = require('body-parser');
const verifyToken = require('./middlewares/verify');
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use('/', indexRouter)
app.use('/', attendRouter)
app.use('/auth', authRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
