var possibleFriend = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(possibleFriend);
    });

    app.post("/api/friends", function(req, res){

     console.log(req)
      console.log(req.body)
      possibleFriend.push(req.body);
      console.log(possibleFriend);
    });

}

var array1 = [2, 4, 5, 6, 20, 8, 9, 10];
var array2 = [5, 5, 13, 20, 8, 9, 20, 11];

var compare = 0;

var addSum = 0;

var execute = true;

// Finds the difference between two arrays and returns an array of the differences.
function difference(arr1) {
for (let i = 0; i < arr1.length; i++) {
    var results = Math.abs(array1[i] - array2[i])
    compare = addSum += results;
    
}
    
}

console.log(compare);
difference(array1);


