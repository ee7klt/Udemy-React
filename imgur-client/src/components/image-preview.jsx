var React = require('react')


module.exports = React.createClass({
  getInitialState: function() {
    return {
      hover: false
    }
  },
  __onMouseEnter: function() {
    this.setState({hover: true});
      console.log(this.state.hover);
  },
  __onMouseLeave: function() {
     this.setState({hover: false});
      console.log(this.state.hover);
  },


  render: function() {
      //console.log(this.props.animated)
    return <div
      className="image-preview"
      onMouseEnter = {this.__onMouseEnter}
      onMouseLeave = {this.__onMouseLeave}
      >
      
      {this.image()}

    </div>


  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 'm.jpg'
    return <img src = {link}/>


  },



})
