//Get our stats data
var data = require('../data.json');

/*
* GET add stats page
*/
exports.view = function(req, res) {
    var totalpts = 0;
    var totaltrb = 0;   
    var totalast = 0;

   for(i=0;i<data.stats.length; i++){
       totalpts += parseInt(data.stats[i].points);
       totaltrb += parseInt(data.stats[i].trebounds);
       totalast += parseInt(data.stats[i].assists);  
      }
    data.stats[0].pts = (totalpts/(data.stats.length)).toFixed(1);
    data.stats[0].trb = (totaltrb/(data.stats.length)).toFixed(1);
    data.stats[0].ast = (totalast/(data.stats.length)).toFixed(1);
    data.stats[1].pts = (totalpts/(data.stats.length)).toFixed(1);
    data.stats[1].trb = (totaltrb/(data.stats.length)).toFixed(1);
    data.stats[1].ast = (totalast/(data.stats.length)).toFixed(1);
    res.render('mystats',data);
}