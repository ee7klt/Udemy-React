var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';   //endpoints api
var apiKey = "d16b356fa5e4b54"; //client ID

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    });
  }
}

//this is how you call it
//Api.get('images');   //rootUrl + images
