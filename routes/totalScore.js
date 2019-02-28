//Get our stats data
var data = require('../data.json');


/*
 * GET 
 */
exports.totalScoreview = function(req, res) {
     //console.log(data);
     var totalpts = 0;
     var totaltrb = 0;   
     var totalast = 0;

     for(i=0;i<data.stats.length; i++){
        totalpts += data.stats[i].points;
        totaltrb += data.stats[i].trebounds;
        totalast += data.stats[i].assists;  
       }

     data.stats[1].pts = totalpts/data.stats.length+1;
     data.stats[1].trb = totaltrb/data.stats.length+1;
     data.stats[1].ast = totalast/data.stats.length+1;
 
     console.log(data);

    res.render('mystats', data);
};