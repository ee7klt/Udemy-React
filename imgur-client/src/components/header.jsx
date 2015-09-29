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
      //console.log(topic)
      //console.log(renderCount++)
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
    return this.state.topics.map(function(topic) {
      return <li onClick={this.handleItemClick}><Link to={"topics/"+topic.id} key={topic.id}>
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

        <ul className = "nav navbar-nav navbar-right">

         <li className="dropdown">
           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" onClick={this.handleCaretClick}>
             Dropdown
             <span
               className="caret"
               >
             </span>
          </a>
           <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
             {this.renderTopics()}
           </ul>
         </li>
        </ul>
      </div>
    </nav>
  }
})
