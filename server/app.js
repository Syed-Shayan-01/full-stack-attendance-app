const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
const port = 4000;
app.use(cors());
// app.use('/', indexRouter)
app.get('/', (req, res, next) => {
    res.send('Hello Shayan');
    next();
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});