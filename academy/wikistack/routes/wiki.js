var express = require('express');
var models = require('../models')
var router = express.Router();

/* BASE ROUTE: /wiki/ */
router.get('/:url', function(req, res, next) {
  var url = req.params.url;
  models.Page.findOne({url_name:url}, function(err,page){
      if(err){
        return next(err);
      }
      if(typeof page !== 'undefined'){
        res.render('show', { title: page.title, content: page.body });
      } else {
        res.send(404);
      }
  });
});

module.exports = router;
