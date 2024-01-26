const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
app.use(cors)
app.use('', indexRouter)
app.listen(4000);