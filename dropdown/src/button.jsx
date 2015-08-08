var React = require('react');

module.exports = React.createClass({

  render: function() {
    //1. replace qualities with reference to this.props elements
    return <button onClick={this.props.whenClick} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
</button>
  }
});
