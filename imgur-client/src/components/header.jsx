var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux')
var TopicStore = require('../stores/topic-store')
var Actions = require('../actions')

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],

  componentWillMount: function () {
    Actions.getTopics();
  },

  onChange: function(event,topics) {
     this.setState({
       topics: topics
     })
  },

  getInitialState: function() {
    return {
      topics:[]
    }
  },

  renderTopics: function() {

    return this.state.topics.map(function(topic) {
      //console.log(topic)
      //console.log(renderCount++)
      return <li key = {topic.id}>
        <Link to={"topics/" + topic.id}>{topic.name}</Link>
      </li>
    })

  },

  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <Link to={"topics/"+topic.id} key={topic.id}>
                <li>{topic.name}</li>
              </Link>
    })
  },



  render: function() {
    return <nav className = "navbar navbar-default header">
      <div className = "container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <ul className = "nav navbar-nav navbar-right">
            {this.renderTopics()}
        </ul>
      </div>
    </nav>
  }
})
