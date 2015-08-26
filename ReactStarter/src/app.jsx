var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://todo123456.firebaseio.com/'
var Header = require('./header');
var List = require('./list');



var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: [],
      loaded: false
    }
  },
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsArray(fb, 'items');
    fb.on('value', this.handleDataLoaded);
  },
  handleDataLoaded: function() {
    this.setState({loaded: true})
  },
  render: function() {
    //console.log(this.state);
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <div className={"content " + (this.state.loaded ? "loaded":"")} >
          <List items = {this.state.items}/>
        </div>
        <div className = "block1">

        </div>
      </div>
    </div>
  }
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
