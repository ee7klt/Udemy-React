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
      topics:[],
      open: false,
      itemTitle: "Topics"
    }
  },

  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <li key = {topic.id} onClick={this.handleItemClick}>
        <Link to={"topics/" + topic.id}>{topic.name}</Link>
      </li>
    })
  },

  handleItemClick: function(item) {
    this.setState({
    open: false,
    itemTitle: item
  });
  },

  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return <li><Link activeClassName="active" to={"topics/"+topic.id} key={topic.id}>
                {topic.name}
              </Link></li>
    })
  },

  handleCaretClick: function (){
    this.setState({open: !this.state.open})
    console.log(this.state.open)
  },



  render: function() {
    return <nav className = "navbar navbar-default header">
      <div className = "container-fluid">
        <Link to='/' className="navbar-brand">Imgur Browser</Link>
        <ul className = "nav navbar-nav navbar-right">
         {this.renderTopics()}
        </ul>
      </div>
    </nav>
  }
})
