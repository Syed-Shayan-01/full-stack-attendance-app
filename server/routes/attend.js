const express = require('express');
const { uploadImage, upload, createUser } = require('../controllers/attend');
const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.post('/attend', createUser)

module.exports = router;