//Get our game data
var data = require('../game.json');

/*
 * GET home page.
 */

exports.favorited = function(req, res) {
    //console.log(data);
    //console.log(req);
    //console.log(req.params.id);
    
    //console.log(data.games[req.params.id]);

    if( data.games[req.params.id].isFavorited == false){
        data.games[req.params.id].isFavorited = true;
    }else{
        data.games[req.params.id].isFavorited = false;
    }

    console.log(data);

    res.render('home', data);
};
