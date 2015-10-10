var React=require('react');

module.exports = React.createClass({
  render: function() {
    return <div> this is image detail</div>
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
})
