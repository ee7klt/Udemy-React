
// render the detail page for a single image
// gets here from image-preview



var React=require('react');
var Reflux = require('reflux');
var Actions = require('../actions')
var DetailStore = require('../stores/detail-store')

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(DetailStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      image: []
    }
  },

  onChange: function(event, image) {
    this.setState({
      image: image
    })
    console.log("image detail is calling the image from store")
    console.log(this.state.image)
  },

  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
    console.log("mounting getImage")
  },

  // componentWillReceiveProps not necessary here
  // because when navigating to a different image
  // we're moving to a completely different component
  // not a different id within the same component as was
  // the case with topic. true?



  render: function() {
    return <div>
      {this.renderContent()}
    </div>
  },

  renderContent: function() {
    return <div>
      <div>
        {this.renderImage()}
      </div>
    </div>
  },

  renderImage: function() {
    return <img src = {this.state.image.link} />
  }



})
