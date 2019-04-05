var friends = require("../data/friends");

//var hotNewFriends = [];

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

  

}


