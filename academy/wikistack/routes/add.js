var express = require('express');
var router = express.Router();

var randomNumber = function(){
  num = 1000 * Math.random();
  return Math.ceil(num);
}

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
  if (p.url_name.length === 0){
    //generates a random number and concatenates with the text first 5 letters
    p.url_name = randomNumber().toString() + req.body.text.substring(0,5) + randomNumber().toString();
  }
  p.save();
  res.redirect('/');
});

module.exports = router;
