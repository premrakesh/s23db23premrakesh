var express = require('express');
const mountains_controlers= require('../controllers/mountains');
var router = express.Router();

/* GET costumes */
router.get('/', mountains_controlers.mountains_view_all_Page );

router.get('/detail', mountains_controlers.mountains_view_one_Page);

router.get('/create', mountains_controlers.mountains_create_Page);

/* GET create update page */
router.get('/update', mountains_controlers.mountains_update_Page);

/* GET delete costume page */
router.get('/delete', mountains_controlers.mountains_delete_Page);

module.exports = router;
