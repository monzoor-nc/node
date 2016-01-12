var api = require('../api');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('modules/general/index', { title: 'Express' });
});

router.get('/who/:user?', function (req, res, next) {
  var name = req.params.user;
  res.send('respond with the name '+ name);
});
router.get('/new', function(req, res) {
    res.render('index', {
    	layout: 'layouts/layout_new',
    	title: 'New layout rendered'
    });
});

router.get('/modules', function (req, res) {
    res.render('modules/general/index', {
    	title: 'New modules folder'
    });
});

router.get('/search', function (req, res){
  //call the api apiGet and create callback function
  api.apiGet(function (data) {
    console.log(data);
    // render to the index.jade and pass the data from api call
    res.render('modules/search/search', { 
      
      title: 'Search',
      layout: false,
      result: data
    });
  });
});

router.post('/search', function(req, res, next) {
  console.log(req.body.s);
  res.send("Hello "+req.body.s);
});



router.use('/user/:userId', function(req, res, next) {
  // get user
  req.user = {
    name: "Monzoor",
    title: "Developer"
  };

  next();
});

router.get('/user/:userId', function(req, res, next){ 
  res.send("Hello " + req.user.name + " " + req.testing);
});

router.put('/user/:userId', function(req, res, next){
  
  // new Promise(function() {
  //   // do stuff
  // });

  // // Update user
  // db.findUser()

  // .then(function(user) {
  //   user.name = "new name";
  //   user.title = "new title";
  //   return user.update();
  // })

  // .then(function() {
  //   //something bad happens
  //   throw new Error("Something bad has happened");
  // })

  // .catch(function(err) {
  //   console.log(err);
  //   next(err);
  // });

  var promises = [];

  promises.push(myPromise());
  promises.push(myOtherPromise());
  promises.push(anotherPromise());

  Promise.all(promises)
  .then(function(values) {
    // Now all three promises are complete
  });

  res.redirect('/user/iwadh');
});




module.exports = router;
