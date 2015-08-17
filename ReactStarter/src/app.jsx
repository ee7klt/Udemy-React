var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://radiant-fire-5046.firebaseio.com/'



var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <h1 className="red">
     booyah
    </h1>
  }
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
