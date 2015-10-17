

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
    
    this.triggerChange()
  },

  find: function(ImageId) {
    console.log("Finding image with id "+ImageId)
    var image = _.findWhere(this.images,{id:ImageId})
    console.log(image)
    return image
    if (image) {
      return image
    } else {
      this.getImage(ImageId);
      return null
    }
  },


  triggerChange: function() {

    this.trigger('change', this.images);
  }
})
