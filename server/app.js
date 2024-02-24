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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
// app.use(cors(
//     {
//         origin: ["https://shayan-attend.vercel.app"],
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true
//     }
// ))
app.use(express.json());
app.use(cookieParser())
app.use('/', indexRouter)
app.use('/', attendRouter)
app.use('/auth', authRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
