var data = require('../data.json');

 /*
 * GET new stats
 */
exports.addStatsview = function(req, res) {

    //console.log(req.query.date);
    //console.log(req.query.points);

    newStat = {
        "date": req.query.date,
        "result": req.query.result,
        "points": req.query.points,
        "trebounds": req.query.trebounds,
        "assists": req.query.assists,
    };

    data.stats.push(newStat);

    //recalculate average
    var totalpts = 0;
    var totaltrb = 0;   
    var totalast = 0;

   for(i=0;i<data.stats.length; i++){
       totalpts += parseInt(data.stats[i].points);
       totaltrb += parseInt(data.stats[i].trebounds);
       totalast += parseInt(data.stats[i].assists);  
      }
     // console.log(totalpts.toFixed(2));
    data.stats[0].pts = (totalpts/(data.stats.length+1)).toFixed(1);
    data.stats[0].trb = (totaltrb/(data.stats.length+1)).toFixed(1);
    data.stats[0].ast = (totalast/(data.stats.length+1)).toFixed(1);
    data.stats[1].pts = (totalpts/(data.stats.length+1)).toFixed(1);
    data.stats[1].trb = (totaltrb/(data.stats.length+1)).toFixed(1);
    data.stats[1].ast = (totalast/(data.stats.length+1)).toFixed(1);

    res.render('mystats',data);
}

/*
* GET add stats page
*/
 exports.view = function(req, res) {
    res.render('addstats',data);
}