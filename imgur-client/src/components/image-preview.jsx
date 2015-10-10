var React = require('react')
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hover: false
    }
  },

  log: function () {
    console.log( this.props.title+". Hover = "+this.state.hover+". Animated = "+this.props.animated);
  },
  __onMouseEnter: function() {
    this.setState({hover: true});

      setTimeout( this.log,1000);
      console.log(this.props)

  },
  __onMouseLeave: function() {
     this.setState({hover: false});
  setTimeout(this.log,1000);

  },


  render: function() {
      //console.log(this.props.animated)
    return <div
      className="image-preview"
      onMouseEnter = {this.__onMouseEnter}
      onMouseLeave = {this.__onMouseLeave}
      >
      <Link to = {"detail/" + this.props.id}>
        {(this.props.animated && this.state.hover) ? this.video() : this.image()}
        {(this.props.animated && !this.state.hover) ? this.icon() : null}
        {this.state.hover ? this.inset(): null}
      </Link>
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
