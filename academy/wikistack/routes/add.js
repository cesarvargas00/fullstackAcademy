var express = require('express');
var router = express.Router();
/* BASE ROUTE: /add */

router.get('/', function(req, res) {
  res.render('add');
});

router.post('/submit', function(req, res) {
  var models = require('../models/');
  var p = new models.Page(
    {
      "title": req.body.title,
      "body":req.body.text,
      "url_name": req.body.title.replace(/\s/ig,"_").replace(/\W/ig,"")
    });
  p.save();
  res.redirect('/');
});

module.exports = router;
