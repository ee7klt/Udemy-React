var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div><h2>I am a topic with ID {this.props.params.id}</h2></div>
    }
  })
