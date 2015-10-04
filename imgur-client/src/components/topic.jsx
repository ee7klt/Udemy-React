var React = require('react');
var ImageStore = require('../stores/image-store')
var Reflux = require('reflux')
var Actions = require('../actions')

module.exports = React.createClass({


  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  onChange: function(event, images) {
    this.setState({
      images: images
    })
    console.log(this.state.images)
  },
  componentWillMount: function() {
    console.log("image-store mounted")
    ImageStore.getImages(this.props.params.id);
  },
  renderImages: function() {
    console.log(this.state.images)
    return this.state.images.slice(0,4).map(function(image) {
      return <li>image.topic</li>
    })
  },
  render: function() {
    return <div>hello</div>
    }
  })
