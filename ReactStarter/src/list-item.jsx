var React = require('react');
var rootUrl = 'https://todo123456.firebaseio.com/';
var ReactFire = require('reactfire');
var Firebase = require('firebase');


module.exports = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/' + this.props.item['.key']);
    //this.bindAsArray(fb, 'item');

  },
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  handleDeleteClick: function() {
    fb.remove();
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    fb.update(update);
  },

  handleInputChange: function(event) {
    var update = {text: event.target.value, textChanged: true}
    this.setState(update)


  },
  changesButtons: function() {
    if (this.state.textChanged) {
    return <span>
      <button className = "btn btn-default"> Save </button>
      <button className = "btn btn-default"> Undo </button>
      </span>
  } else return null
  },

  render: function() {

    return <div className = "input-group">
        <span className = "input-group-addon">
          <input
            type="checkbox"
            checked = {this.state.done}
            onChange = {this.handleDoneChange}

            />
          </span>
          <input
            type="text"
            className = "form-control"
            value={this.state.text}
            onChange = {this.handleInputChange}
            />
          <span className = "input-group-btn">
            {this.changesButtons()}
            <button
              className="btn btn-default"
              onClick = {this.handleDeleteClick}
              >
              Delete
            </button>
        </span>
    </div>

  }
})
