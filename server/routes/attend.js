const express = require('express');
const { createUser, getAttendUser, attendUpdateUser, deleteUser } = require('../controllers/attend');
const { uploadImage, upload } = require('../cloudinary/attend');
const router = express.Router();

router.get('/getallUser', getAttendUser);
// router.post('/upload', upload.single('image'), uploadImage);
router.post('/attendance', createUser);
router.put('/attendUpdate/:id', attendUpdateUser)
router.delete('/deleteUser/:id', deleteUser);
module.exports = router;