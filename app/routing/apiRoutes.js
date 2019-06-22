//
var friends = require('../data/friends.js'); 


// Routing 
module.exports = function (app) {

    //Get request 
    app.get('/api/friends', function (req, res) {
        res.json(friends); 
    }); 

    // Post request 
    app.post('/api/friends', function (req, res) {

        // object to hold best match to loop through options 
        var bestMatch = {
            name: "", 
            photo: "", 
            friendDifference: 1000 
        }; 

        // Info from user survey submission 
        var userInfo = req.body; 
        var userScore = userInfo.scores; 
        // Holds data from users submitted name and photo
        var userName = userInfo.name; 
        var userPhoto = userInfo.photo; 
        // variable used to calculate the total Difference between the users scores and the friends. 
        var totalDifference = 0; 
        // loop through friends data 
        for (var i = o; i < friends.length - 1; i++) {
            console.log(friends[i].name); 
            totalDifference = 0; 
        }

        //loop through friends score and user score to calculate the difference 


        // calculate the difference between both user and friends score 

    

    })

    // show or push to save info to database 




}