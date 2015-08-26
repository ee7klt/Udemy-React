var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  renderList: function() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Add a todo to get started
      </h4>
    } else {
      var children = [];
      //console.log(this.props.items);
      for (var key in this.props.items) {
        console.log(this.props.items);
        console.log(this.props.items[key]['.key']);
        //console.log(this.props.items[key].text);
        children.unshift(
          <ListItem
            item = {this.props.items[key]}
            key = {this.props.items[key]['.key']}
          />

        )
        //console.log(children);
      }
      //console.log(children);
      return children;
    }
  },
  render: function() {
    //console.log(this.props);
      return <ul>
      {this.renderList()}
      </ul>
  }
});
