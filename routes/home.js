//Get our game data
var data = require('../game.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home');
};