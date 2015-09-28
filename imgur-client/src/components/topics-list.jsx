var React = require('react')
var TopicStore = require('../stores/topic-store')
var Reflux = require('reflux')
var Actions = require('../actions')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var renderCount = 0

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],

  renderTopics: function() {

    return this.state.topics.map(function(topic) {
      //console.log(topic)
      //console.log(renderCount++)
      return <Link to={"topics/"+topic.id} className="list-group-item" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
              </Link>
    })

  },

  onChange: function(event,topics) {
     this.setState({
       topics: topics
     })
  },

  componentWillMount: function () {
    Actions.getTopics();
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
