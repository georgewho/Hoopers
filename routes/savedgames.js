//Get our game data
var gamedata = require('../game.json');//change this to only favorited game array

/*
 * GET favorited games page.
 */
exports.favoritesview = function(req, res){
  var favoritedGame;
  for(i=0;i<gamedata.games.length; i++){
    if( gamedata.games[i].isFavorited == true){
      favoritedGame.push(gamedata.games[i]);
    }
  }
  console.log(favoritedGame);
  res.render('savedgames', favoritedGame);
};


/*
 * GET saved games page.
 */
exports.view = function(req, res){
  res.render('savedgames', gamedata);
};
