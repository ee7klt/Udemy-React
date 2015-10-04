var React = require('react');
var ImageStore = require('../stores/image-store')
var Reflux = require('reflux')
var Actions = require('../actions')

module.exports = React.createClass({


  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  onChange: function(event, images) {
    this.setState({
      images: images
    })
  },
  componentWillMount: function() {
    console.log("image-store mounted")
    Actions.getImages(this.props.params.id);
  },
  renderImages: function() {
  //  console.log(this.state.images)
    return this.state.images.slice(0,4).map(function(image) {
      return <li>{image.topic}</li>
    })
  },
  render: function() {
    return <div>{this.renderImages()}</div>
    }
  })
