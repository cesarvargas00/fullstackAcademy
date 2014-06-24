var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/:url', function(req, res) {
    models.Page.remove({url_name:req.params.url},function(err, page){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/");;
      }
    });

});

module.exports = router;