//Get our game data
var gamedata = require('../game.json');

/*
 * GET saved games page.
 */


 /*
 * ADD new added game
 */
exports.view = function(req, res){
  console.log(gamedata);
  res.render('savedgames', gamedata);
};
