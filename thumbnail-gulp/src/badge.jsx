var React = require('react');

module.exports = React.createClass({
  render: function() {
    //1. replace qualities with reference to this.props elements
    return <button className="btn btn-primary" type="button">
  {this.props.title} <span className="badge">{this.props.number}</span>
</button>
  }
});
