var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mountains', { title: 'Search Results mountains ' });
});

/* GET detail costume page */
router.get('/detail', mountains_controlers.mountains_view_one_Page);
module.exports = router;
