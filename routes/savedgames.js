//Get our game data
var gamedata = require('../game.json');
/*
 * GET saved games page.
 */
exports.view = function(req, res){
  res.render('savedgames', gamedata);
};
