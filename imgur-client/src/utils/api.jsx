var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';   //endpoints api
var apiKey = "d16b356fa5e4b54"; //client ID

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    })


  }
}


//Api.get('topics/default')
//.then(function(data){
  //do something with data
//})
//this is how you call it
//Api.get('images');   //rootUrl + images
