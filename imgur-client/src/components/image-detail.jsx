var React=require('react');
var Reflux = require('reflux');
var Actions = require('../actions')
var ImageStore = require('../stores/image-store')

module.exports = React.createClass({

mixins: [
  Reflux.listenTo(ImageStore, 'onChange')
],

getInitialState: function() {
  return {
    image: []
  }
},


  render: function() {
    return <div> this is image {this.props.params.id}
    <br />
      {this.image()}
    </div>
  },
  image: function() {
      var link = 'http://i.imgur.com/' + this.props.params.id + 'm.jpg'
      return <img src = {link}/>
  }
}),

onChange: function(event, image) {
  this.setState({
    image: image
  });
}
