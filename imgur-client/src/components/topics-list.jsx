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
    return this.state.topics.slice(0,4).map(function(topic) {
      return <Link to={"topics/"+topic.id} key={topic.id}>

                <li className="list-group-item">{topic.name}</li>

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
      <ul className="list-group">
      {this.renderTopics()}
    </ul>
    </div>
  }
})
