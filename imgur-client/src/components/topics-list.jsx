var React = require('react')


module.exports = React.createClass({

  renderTopics: function() {
    var children = [];

    for (var key in this.state.topics) {
      var item = this.state.topics[key]
      children.unshift(
        <li>{item}</li>
      )
    }
    return children
  },

  getInitialState: function() {
    return {
      topics: ["list item 1", "list item 2"]
    }
  },

  render: function() {
    return <div className="list-group">
      <ul>
      {this.renderTopics()}
    </ul>
    </div>
  }
})
