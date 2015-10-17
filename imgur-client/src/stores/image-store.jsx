

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


  // images does not exist. fetch single image and put it in to an array called images
  getImage: function(ImageId) {
    console.log("running get image")
    return Api.get('gallery/image/'+ImageId)
            .then(function(json) {
              if (this.images) {
                this.images.push(json.data)
                console.log(this.images)
              }
              else {
                console.log("fetching single image")
                this.images = [json.data]
              }
                this.triggerChange() //make it an array so that we can use findWhere
            }.bind(this))


  },

  find: function(ImageId) {
    console.log("Finding image with id "+ImageId)
    var image = _.findWhere(this.images,{id:ImageId})
    if (image) {
      console.log("image found")
      return image
    } else {
      console.log("image not found")
      this.getImage(ImageId);
      return null
    }
  },


  triggerChange: function() {

    this.trigger('change', this.images);
  }
})
