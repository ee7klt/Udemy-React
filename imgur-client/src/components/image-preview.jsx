var React = require('react')


module.exports = React.createClass({
  render: function() {
    return <div>{this.image()}</div>

  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 't.jpg'
    return <img src = {link}/>
  }


})
