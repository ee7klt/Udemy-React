var React = require('react')
var api = require('../utils/api')

module.exports = React.createClass({

  renderTopics: function() {

    var children = [];
    this.getTopics()
    this.state.topics.forEach(function(item) {
    //  console.log(item)
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

  getTopics: function() {
    return api.get('topics/defaults')
          .then(function(topicsArr) {
            //console.log(topicsArr)
            var fetchedTopics = []
            topicsArr.data.forEach(function(item) {
              //console.log(item.name)
              fetchedTopics.push(item.name)
              //this.state.topics.push(item.name)
            }.bind(this))
            console.log(fetchedTopics)
            //console.log(this.state)
            this.setState({topics: fetchedTopics})

          }.bind(this))
  },

  render: function() {

    return <div className="list-group">
      <ul>
      {this.renderTopics()}
    </ul>
    </div>
  }
})
