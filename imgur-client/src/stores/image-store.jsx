

// getImages returns all (non-album) images
//  of a particular topic.
//    id: id of the particular topic
// called from topic.jsx


var Api = require('../utils/api')
var Reflux = require('reflux')
var Actions = require('../actions')
var _ = require('lodash')


module.exports = Reflux.createStore ({
  listenables: [Actions],
  getImages: function (TopicId) {
    return Api.get('topics/'+TopicId)
          .then(function(json) {
            this.images = json.data;
            this.images =
              _.filter(this.images, function(img) {
                return !(img.is_album)
              })

            this.triggerChange();
          }.bind(this))
  },
  getImage: function(ImageId) {
    return Api.get('gallery/image/'+ImageId)
          .then(function(json) {
            this.image = json.data;
          }.bind(this))
  },
  triggerChange: function() {

    this.trigger('change', this.images);
  }
})
