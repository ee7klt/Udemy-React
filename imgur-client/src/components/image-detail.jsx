var React=require('react');

module.exports = React.createClass({
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
})
