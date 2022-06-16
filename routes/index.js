const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');
const { upload } = require('../helpers/uploader');

router.get('/', movieController.index);
router.post('/import', upload('file'), movieController.import);

module.exports = router;