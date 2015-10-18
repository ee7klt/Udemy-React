

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
          if (this.images) this.triggerChange()
          else {
            console.log("images not found. returning array of single image")
             Api.get('gallery/image/'+ImageId)
                  .then(function(json) {
                    console.log(json.data)
                    this.images = json.data;
                    this.triggerChange()
                  }.bind(this))


          }
      },

  find: function(ImageId) {
    return _.findWhere(this.images,{id:ImageId})
  },

  triggerChange: function() {

    this.trigger('change', this.images);
  }
})
