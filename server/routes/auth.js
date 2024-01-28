const express = require('express');
const { createUser } = require('../controllers/auth');
const router = express.Router();

router.post('/Signup', createUser);

module.exports = router;