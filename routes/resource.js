var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mountains_controller = require('../controllers/mountains');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/mountains', mountains_controller.mountains_create_post);
// DELETE request to delete Costume.
router.delete('/mountains/:id', mountains_controller.mountains_delete);
// PUT request to update Costume.
router.put('/mountains/:id', mountains_controller.mountains_update_put);
// GET request for one Costume.
router.get('/mountains/:id', mountains_controller.mountains_detail);
// GET request for list of all Costume items.
router.get('/mountains', mountains_controller.mountains_list);
module.exports = router;