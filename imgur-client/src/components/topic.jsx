var React = require('react');
var ImageStore = require('../stores/image-store')
var Reflux = require('reflux')
var Actions = require('../actions')
var ImagePreview = require('./image-preview.jsx')

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
    console.log(this.state.images)
  },
  componentWillMount: function() {
    console.log("fetching data via ImageStore")

    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
      console.log("fetching data via ImageStore")
    Actions.getImages(nextProps.params.id);
  },

  renderImages: function() {
    console.log(this.state.images)
    return this.state.images.slice(0,60).map(function(image) {
      //console.log(image.id)
      return <ImagePreview key={image.id} {...image}/>
    })
  },
  render: function() {
    console.log('Topic is rendering with ID '+this.props.params.id)
    console.log('I have this many images: '+this.state.images.length)
    return <div className="topic">{this.renderImages()}</div>
    }
  })
