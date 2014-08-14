var store = require('../store');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {  //get is the type of request that this router handles
  var tweets = store.list();  //data being returned from store.js
  res.render('index', { "title": 'Twitter.js', "tweets": tweets, show_form: true });
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  io.sockets.emit("new_tweet", {name:name, text:text});
 
  store.push(name, text);
  res.redirect('/');  //necessary to reload page now because we haven't defined submit
});

module.exports = router;
