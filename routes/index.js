const express = require('express');
const router = express.Router();
const movieController = require('../controllers/student.controller');
const { upload } = require('../helpers/uploader');

router.get('/', movieController.index);
router.post('/import', upload('file'), movieController.import);
// router.get('/export', movieController.export);

module.exports = router;