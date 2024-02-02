const express = require('express');
const { uploadImage, upload } = require('../controllers/attend');
const router = express.Router();


router.post('/upload', upload.single('image'), uploadImage)

module.exports = router;