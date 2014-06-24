var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    models.Page.find(function(err, pages){
      if(err){
        console.log(err);
      }
      else{
        res.render('index', { docs: pages });
      }
    });

});

module.exports = router;
