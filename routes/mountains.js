var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mountains', { title: 'Search Results mountains ' });
});

module.exports = router;
