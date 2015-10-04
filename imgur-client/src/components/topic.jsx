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
    console.log("fetching data via ImageStore")
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
      console.log("fetching data via ImageStore")
    Actions.getImages(nextProps.params.id);
  },

  renderImages: function() {
    console.log(this.state.images)
    return this.state.images.slice(0,4).map(function(image) {
      console.log(image.id)
      return <li> <img src={'http://i.imgur.com/'+image.id+'.png'}/></li>
    })
  },
  render: function() {
    console.log('Topic is rendering with ID '+this.props.params.id)
    console.log('I have this many images: '+this.state.images.length)
    return <div>{this.renderImages()}</div>
    }
  })
