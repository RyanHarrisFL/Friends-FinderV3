// Requiring NPM packages
var express = require("express");

//Creating express app. 
var app = express();

//sets port and allows port to be set by Heroku. 8080 is a default if Heroku is not available. 
var PORT = process.env.PORT || 8080;

//Handling data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Middleware to handle static files
app.use(express.static('public'));

//Pointing to route files
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//starting server, so it can listen for our app requests.
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
    
});