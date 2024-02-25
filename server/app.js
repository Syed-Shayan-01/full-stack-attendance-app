require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 4000;
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use((req, res, next) => {
    res.header(
        Access - Control - Allow - Origin,
        "https://shayan-attend.vercel.app"
    );
    res.header(Access - Control - Allow - Methods, "GET, POST, PUT, DELETE, OPTIONS");
    res.header(Access - Control - Allow - Headers, "Content - Type, Authorization");
    res.header(Access - Control - Allow - Credentials, true);

    console.log("“Request received:”", req.method, req.url);

    next();
});


app.use(express.json());
app.use('/', indexRouter)
app.use('/', attendRouter)
app.use('/auth', authRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
