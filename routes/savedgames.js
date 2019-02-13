//Get our game data
var gamedata = require('../game.json');

/*
 * GET saved games page.
 */

exports.view = function(req, res){

  console.log(gamedata);
  res.render('savedgames', gamedata);
};
