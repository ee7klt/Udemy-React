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
      return <Link to={"topics/"+topic.id} className="list-group-item" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
              </Link>
    })

  },



  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
})
