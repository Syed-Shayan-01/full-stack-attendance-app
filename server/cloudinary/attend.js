// const fs = require('fs-extra');
// const path = require('path')
// const cloudinary = require('cloudinary')
// const filePath = path.join(process.cwd(), 'newFile');
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, `./uploads/`)
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage });

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_APIKEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// });


// const uploadImage = (req, res) => {
//     return new Promise((reslove, reject) => {
//         fs.readdirSync(`./uploads/`).forEach((file) => {
//             cloudinary.v2.uploader.upload(`./uploads/${file}`, (error, result) => {
//                 fs.remove(`./uploads/${file}`, err => {
//                     if (err) {
//                         reject(err)

//                     }
//                 })
//                 if (error) {
//                     reject(error)
//                 } else {
//                     res.status(200).send({ imageUrl: result.url })
//                 }


//             })
//         });
//     })
// }

// module.exports = { upload, uploadImage }