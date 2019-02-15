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
    console.log(data);
    res.render('mystats',data);
}

/*
* GET add stats page
*/
 exports.view = function(req, res) {
    res.render('addstats',data);
}