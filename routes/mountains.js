var express = require('express');
const mountains_controlers= require('../controllers/mountains');
var router = express.Router();

/* GET costumes */
router.get('/', mountains_controlers.mountains_view_all_Page );

module.exports = router;
