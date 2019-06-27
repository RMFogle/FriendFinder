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
        // variable used to calculate the total Difference between the users scores and the friends. 
        var totalDifference = 0; 
        // loop through friends data 
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name); 
            totalDifference = 0; 
        }

        //loop through friends score and user score to calculate the difference 
        for (var j = 0; j < 10; j++) {
            totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j])); 

            if (totalDifference <= bestMatch.friendDifference) {

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].name; 
                bestMatch.friendDifference = totalDifference; 
            }
        }

        // show or push to save info to database 
    friends.push(userInfo);

    res.json(bestMatch); 

});

};