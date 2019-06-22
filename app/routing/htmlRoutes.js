// Dependencies, path 
var path = require("path"); 


// Routing 

module.exports = function (app) {
    //html GET request 
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html")); 
    }); 

    //default route which displays home page 
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html")); 
    }); 
}