var React = require('react');
var ImageStore = require('../stores/image-store')
var Reflux = require('reflux')

module.exports = React.createClass({


  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  onChange: function(event, images) {
    this.setState({
      images: images
    })
  },
  componentWillMount: function() {
    ImageStore.getImages(this.props.params.id);
  },
  renderImages: function() {
    console.log(this.state.images)
    return this.state.images.slice(0,4).map(function(image) {
      return <li>image.topic</li>
    })
  },
  render: function() {
    return <div><h2>{this.renderImages()}</h2></div>
    }
  })
