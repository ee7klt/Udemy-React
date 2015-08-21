var React = require('react');

module.exports = React.createClass({
  render: function() {
      return <ul>
        {this.props.itemsStore.child("text").on("value", function(snapshot) {
          alert(snapshot.val());
        })}
      </ul>
  }
});
