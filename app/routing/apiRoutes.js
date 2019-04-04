var tableData = require("../data/friends");

var hotNewFriends = [];

module.exports = function(app) {
  
    app.get("/data/friends", function(req, res) {
      res.json(tableData);

    });
  

}