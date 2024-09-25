const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');

// Create Cloudinary storage instance
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'restaurants', // Folder name in Cloudinary
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
