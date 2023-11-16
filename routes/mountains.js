var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mountains', { title: 'Search Results mountains ' });
});

const mountains_controllers = require('C:/Users/S565102/Desktop/webapps-repo/s23db23premrakesh/controllers/mountains');
/* GET detail costume page */
router.get('/detail', mountains_controllers.mountains_view_one_Page);

router.get('/update', mountains_controllers.mountains_update_Page);

router.get('/create', mountains_controllers.mountains_create_Page)   

router.get('/delete', mountains_controllers.mountains_delete_Page);


module.exports = router;