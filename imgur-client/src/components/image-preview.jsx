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

      {(this.props.animated && this.state.hover) ? this.video() : this.image()}
      {(this.props.animated && !this.state.hover) ? this.icon() : null}
      {this.state.hover ? this.inset(): null}

    </div>


  },
  image: function() {
      var link = 'http://i.imgur.com/' + this.props.id + 'm.jpg'
      return <img src = {link}/>
  },

  video: function() {

    var link = this.props.webm
    return <div>
      <video
        autoPlay
        loop
        autoBuffer
        preload = 'auto'
        webkit-playsinline
        >
        <source src={link} type='video/mp4'></source>

      </video>
    </div>
  },

  icon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  },

  inset: function() {
    return <div className="inset">
      Views: {this.props.views}
    <br/>
      Upvotes: {this.props.ups}
    </div>
  }




})
