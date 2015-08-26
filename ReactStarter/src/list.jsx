var React = require('react');

module.exports = React.createClass({
  renderList: function() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Add a todo to get started
      </h4>
    } else {
      var children = [];
      console.log(this.props.items);
      for (var key in this.props.items) {
        //console.log(key);
        //console.log(this.props.items[key].text);
        children.unshift(
          <li>
            {this.props.items[key].text}
          </li>
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
