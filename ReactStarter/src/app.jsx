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
  deleteButton() {
    if (!this.state.loaded) {
      return
    } else {
      return <div className="text-center clear-complete">
        <hr />
        <button
          type="button"
          onClick={this.onDeleteDoneClick}
          className="btn btn-default">
          Clear Complete
        </button>
      </div>
    }
  },
    onDeleteDoneClick: function() {
        //for (var key in this.state.items) {
        //var item = this.state.items[key];
        //console.log(item);

        this.state.items.forEach(function(item){
          if (item.done) {

             console.log(this.fb.child(item['.key']).text);
          }
        });
    },
  render: function() {
    //console.log(this.state.items);

    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <hr />
        <div className={"content " + (this.state.loaded ? "loaded":"")} >
          <List items = {this.state.items}/>
          {this.deleteButton()}
        </div>

      </div>
    </div>
  }
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
