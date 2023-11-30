var express = require('express');
const mountains_controlers= require('../controllers/mountains');
var router = express.Router();

router.get('/mountains', mountains_controlers.mountains_view_all_Page);

/* GET Mountains */
router.get('/',function(req, res, next){
  res.render('mountains', { title: 'Search Results Mountains' });
});


module.exports = router;
