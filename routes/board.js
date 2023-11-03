var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  let rows = Number(query.rows);
  let cols = Number(query.cols);

  if (!Number.isInteger(rows) || !Number.isInteger(cols)) {
    res.render('board', { title: 'Board Display', query: query });
  } else if (rows < 1 || rows > 10) {
    res.render('board', { title: 'Board Display', query: query });
  } else if (cols < 1 || cols > 10) {
    res.render('board', { title: 'Board Display', query: query });
  } else {
    res.render('board', { title: 'Board Display', query: query });
  }});

module.exports = router;
