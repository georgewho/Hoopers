//Get our game data
var data = require('../game.json');

/*
 * GET home page.
 */

exports.view = function(req, res) {
    data["viewAlt"] = false;
    console.log(data);
    res.render('home', data);
};

exports.viewAlt = function(req, res) {
    data["viewAlt"] = true;
    res.render('home', data);
}