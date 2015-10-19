


// getImage returns a single image
//    id: id of the particular image
// clicked from image-preview.jsx


var Api = require('../utils/api')
var Reflux = require('reflux')
var Actions = require('../actions')
var _ = require('lodash')


module.exports = Reflux.createStore ({
  listenables: [Actions],
  getImage: function(id) {
    return Api.get('image/' + id)
    .then(function(json) {
      this.image = json.data;
      this.triggerChange();
    }.bind(this))
  },
  triggerChange: function() {

    this.trigger('change', this.image);
  }
})
