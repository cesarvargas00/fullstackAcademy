var express = require('express');
var models = require('../models');
var router = express.Router();

/* BASIC ROUTE: edit */
router.get('/:url', function(req, res) {
    models.Page.findOne({url_name:req.params.url},function(err, page){
      if(err){
        console.log(err);
      }
      else{
        res.render("edit",{text:page.body,title:page.title, url_name: page.url_name});
      }
    });
});

router.post('/submit', function(req, res, next) {
    models.Page.findOne({url_name:req.body.oldUrl},function(err, page){
      if(err) return next(err);
      page.title = req.body.title;
      page.url_name = page.title.replace(/\s/ig,"_").replace(/\W/ig,"");
      page.body = req.body.text;
      page.save(function(err,doc) {
        if(err) return next(err);
        res.redirect("/");
      });
    });

});

module.exports = router;