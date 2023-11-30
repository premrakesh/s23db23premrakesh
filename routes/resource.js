var express = require('express');
var router = express.Router();
var passport = require("passport");
// Require controller modules.
var api_controller = require('../controllers/api');
var mountains_controller = require('../controllers/mountains');

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Dog.
router.post('/mountains', mountains_controller.mountains_create_post);
// DELETE request to delete Dog.
router.delete('/mountains/:id', mountains_controller.mountains_delete);
// PUT request to update Dog.
router.put('/mountains/:id', mountains_controller.mountains_update_put);
// GET request for one Dog.
router.get('/mountains/:id', mountains_controller.mountains_detail);
// GET request for list of all Dog items.
// router.get('/dogs', dog_controller.dog_list);
router.get('/mountains', mountains_controller.mountains_view_all_Page);
router.get('/detail',secured, mountains_controller.mountains_view_one_Page);
router.get('/create',secured, mountains_controller.mountains_create_Page);
router.get('/update',secured, mountains_controller.mountains_update_Page);
router.get('/delete',secured, mountains_controller.mountains_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
   
module.exports = router;