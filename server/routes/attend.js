const express = require('express');
const { uploadImage, upload, createUser, getAttendUser, attendUpdateUser, deleteUser } = require('../controllers/attend');
const router = express.Router();

router.get('/getallUser', getAttendUser);
router.post('/upload', upload.single('image'), uploadImage);
router.post('/attend', createUser);
router.put('/attendUpdate/:id', attendUpdateUser)
router.delete('/deleteUser/:id', deleteUser);
module.exports = router;