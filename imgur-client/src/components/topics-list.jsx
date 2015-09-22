var React = require('react')


module.exports = React.createClass({

  renderTopics: function() {
    var children = [];

    this.state.topics.forEach(function(item) {
      children.unshift(
        <li>{item}</li>
      )
    }.bind(this))

    
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
