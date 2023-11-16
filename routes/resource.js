var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api');
var mountains_controller = require('../controllers/mountains');
router.get('/', api_controller.api);
router.post('/mountains', mountains_controller.mountains_create_post);
router.delete('/mountains/:id', mountains_controller.mountains_delete);
router.put('/mountains/:id', mountains_controller.mountains_update_put);
router.get('/mountains/:id', mountains_controller.mountains_detail);
router.get('/mountains', mountains_controller.mountains_view_all_Page);
router.get('/mountains',mountains_controller.mountains_list);
module.exports = router;