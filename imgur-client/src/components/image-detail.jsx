
// render the detail page for a single image
// gets here from image-preview



var React=require('react');
var Reflux = require('reflux');
var Actions = require('../actions')
var ImageStore = require('../stores/image-store')

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    console.log("getInitialState")
    return {
      images: null
    }
  },

  onChange: function(event,images) {
    this.setState({
      images: images
    })

  },

  componentWillMount: function() {
    Actions.getImage(this.props.params.id)
  },



  // componentWillReceiveProps not necessary here
  // because when navigating to a different image
  // we're moving to a completely different component
  // not a different id within the same component as was
  // the case with topic. true?



  render: function() {

    return <div> this is image {this.props.params.id}
      <br />
      {this.state.images}
    </div>
  },
  image: function() {
    var link = ImageStore.find(this.props.params.id)
    return link
  }



})
