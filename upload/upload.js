const multer = require('multer');

exports.showForm = (req, res) => {
    res.render('upload');
}

exports.upload = multer({storage: multer.memoryStorage()}).single('upload');

exports.getData = (req, res) => {
    if(!req.file) {
        return res.json({error: "Something went wrong"});
    }

    const size = req.file.size;
    res.json({filesize: size});
}