


// return comments for particular gallery image
// https://api.imgur.com/3/gallery/image/{id}/comments/{sort}


var Api = require('../utils/api')
var Reflux = require('reflux')
var Actions = require('../actions')
var _ = require('lodash')


module.exports = Reflux.createStore ({
  listenables: [Actions],
  getImage: function(id) {
    return Api.get('gallery/image/' + id+'/comments/')
    .then(function(json) {
      this.comments = json.data;
      this.triggerChange();
    }.bind(this))
  },
  triggerChange: function() {

    this.trigger('change', this.comments);
    console.log("this is detail store")
    console.log(this.comments)
  }
})
