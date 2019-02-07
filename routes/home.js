/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home', {
    'games': [
      { 'name': 'Game1',
        'image': 'game1.png',
        'id': 'game1'
      },
      { 'name': 'Game2',
        'image': 'game2.png',
        'id': 'game2'
      },
      { 'name': 'Game3',
        'image': 'game3.png',
        'id': 'game3'
      }
    ]
  });
};