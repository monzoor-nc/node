var request = require('request'); // require in request
// var initGet = {uri: 'http://jsonplaceholder.typicode.com/posts/1'};
var initGet = {uri: 'http://localhost:3000/posts'};
var initPost = {uri: 'http://http://linkToApi.com/post'};

var apiCaller = function (url, cb) {
  //use request to make the external http call to the JSON api
  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      cb(body);// Send body/response to callback
    }
  });
};
// Call the api with a call back
var apiGet = function(cb) {
  return apiCaller(initGet.uri, cb);
};

var apiPost = function(post, cb) {
  return apiCaller(initGet.uri + post, cb);
};
// Export the functions for external access
module.exports = {
  apiGet: apiGet,
  apiPost: apiPost
};