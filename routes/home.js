//Get our game data
var data = require('../game.json');

/*
 * GET home page.
 */

exports.view = function(req, res) {
    console.log(data);
    res.render('home', data);
};


