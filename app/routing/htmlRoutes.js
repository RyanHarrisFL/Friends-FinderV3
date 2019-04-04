


/*
var array1 = [2, 4, 5, 6, 20, 8, 9, 10]

var array2 = [5, 5, 13, 20, 8, 9, 20, 11]

var diffArray = [];

var compare = 0;

var addSum = 0;

var execute = true;

// Finds the difference between two arrays and returns an array of the differences.
function difference(arr1) {
    do {
for (let i = 0; i< arr1.length; i++) {
    var results = Math.abs(array1[i] - array2[i])
    var compare = addSum += results;
    diffArray.push(results);
        console.log(diffArray); 
}       execute = false;
    } while (execute === true);

if (execute === false) {
    console.log(compare);
}
    
}

//console.log(diffTotal);
difference(array1);

*/
var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "./public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };