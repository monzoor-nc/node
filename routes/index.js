var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/who/:user?', function(req, res, next) {
  var name = req.params.user;
  res.send('respond with the name '+ name);
});


module.exports = router;
