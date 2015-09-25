var React = require('react')
var TopicStore = require('../stores/topic-store')
var Reflux = require('reflux')

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],

  renderTopics: function() {

    return this.state.topics.map(function(topic) {
      return <li> {topic}</li>
    })

  },

  onChange: function(event,topics) {
     this.setState({
       topics: topics
     })
  },

  componentWillMount: function () {
    TopicStore.getTopics();
  },


  getInitialState: function() {
    return {
      topics: []
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
