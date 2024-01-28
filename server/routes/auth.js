const express = require('express');
const { createUser, findUser } = require('../controllers/auth');
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', findUser)
module.exports = router;