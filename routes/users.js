var express = require('express');
var router = express.Router();
var store = require("../store");
 
router.get('/:name/tweets/:id', function(req, res) {
  var name = req.params.username;  //req params are given in url
  var id = parseInt(req.params.id); //automatically will set id to string, so need to parseInt to set to number
  var list = store.find({id: id});
 
  res.render('index', { title: 'Twitter.js - Posts by ' + name, "tweets": list, name: name});
});

router.get('/:username', function(req, res) {
  var name = req.params.username;
  var list = store.find({name: name});
 
  res.render('index', { title: 'Twitter.js - Posts by ' + name,  "tweets": list, show_form: true, name: name});
});
 
module.exports = router;
