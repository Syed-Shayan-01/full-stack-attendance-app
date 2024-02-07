const express = require('express');
const { uploadImage, upload, createUser, getAttendUser } = require('../controllers/attend');
const router = express.Router();

router.get('/getallUser', getAttendUser);
router.post('/upload', upload.single('image'), uploadImage);
router.post('/attend', createUser);

module.exports = router;