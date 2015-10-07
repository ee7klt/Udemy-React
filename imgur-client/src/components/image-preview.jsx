var React = require('react')


module.exports = React.createClass({
  getInitialState: function() {
    return {
      hover: false
    }
  },
  __onMouseEnter: function() {
    this.setState({hover: true});
      console.log("Entered "+ this.props.title+". Hover = "+this.state.hover+". Animated = "+this.props.animated);
      console.log(this.props)

  },
  __onMouseLeave: function() {
     this.setState({hover: false});
  console.log("Exited "+ this.props.title+". Hover = "+this.state.hover+". Animated = "+this.props.animated);

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
    if ((this.state.hover) && (this.props.animated)) {
      var link = 'http://i.imgur.com/' + this.props.id + '.webm'
      return <video><source src={link} type="video/webm" /></video>
    } else {
      var link = 'http://i.imgur.com/' + this.props.id + 'm.jpg'
      return <img src = {link}/>
    }

  },



})
