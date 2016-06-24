var express = require('express');
var router = express.Router();
var db = require('../config/database');
var betGames = db.get('betGames');
var dbz = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  betGames.find({}, function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.post('/new', function(req, res) {
  console.log("Post to /new");
  req.body.bets = [{name:"Jay", range: 20}, {name:"David", range: 10}];
  betGames.insert(req.body, function(err, data) {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

router.get('/:id/bad', function(req, res) {
  console.log('Helloooooo');
  betGames.findById(req.params.id, function(err, betGame) {
    var betGamesTemp = db.get('betGames'+req.params.id);
    dbz.push(betGamesTemp)
    betGamesTemp.insert(betGame, function(err, data) {
      res.json(betGame);
    });
  });
});

router.get('/bad', function(req, res) {
  var betGamesTemp = dbz[dbz.length - 1];
  console.log('HELPMEEE');
  betGamesTemp.find({}, function(err, data) {
    if (err) throw err;
    console.log('HELLLOOOO');
    console.log(data);
    betGamesTemp.remove({}, function(err, stuff) {
      dbz.pop();
      res.json(data);
    })
  });
});


module.exports = router;
