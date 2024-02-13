const express = require('express');
const { createUser, findUser, updateUser } = require('../controllers/auth');
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', findUser);
router.put('/updatePass/:id', updateUser);
module.exports = router;