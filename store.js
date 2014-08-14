//THIS IS WHERE I WILL BE STORING THE APP'S DATA 
//ex. when someone writes a tweet, it will get stored here as an object

var _ = require("underscore");
 
var store = module.exports = (function(){
  var data = [];
  var id = 0;
 
  return {
    push: function(name, text, id){
      data.push({
        "name": name,
        "text": text,
        "id": id //data.length
      });
      id++; //every time I push, the id will be unique to the tweet
    },
 
    list: function(){
      return data;
    },
 
    find: function(properties){
      return _.where(data, properties);  //from underscore library

    }
  };
})();  //after the code above is run, var store will hold an object with the functions push, list, find

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
 
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
 
var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};
 
for(var i=0; i<10; i++) {
  store.push(getFakeName(), getFakeTweet());
}





































