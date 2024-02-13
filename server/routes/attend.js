const express = require('express');
const { uploadImage, upload, createUser, getAttendUser, attendUpdateUser, deleteUser } = require('../controllers/attend');
const router = express.Router();

router.get('/getallUser', getAttendUser);
router.post('/upload', upload.single('image'), uploadImage);
router.post('/attend', createUser);
router.put('/attendUpdate/:id', attendUpdateUser)
<<<<<<< HEAD
router.delete('/deleteUser/:id', deleteUser)
=======
>>>>>>> 8bbefd635ee7a7e7f8a9a004b180ca95d55f0a20
module.exports = router;