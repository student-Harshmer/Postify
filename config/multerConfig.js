const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Disk storage setup :
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Images/Uploads')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function(err, name) {
            const fn = name.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
        })
    }
})

// Export upload variable creation :
const upload = multer({ storage: storage })

module.exports = upload;