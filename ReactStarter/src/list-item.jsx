var React = require('react');
var rootUrl = 'https://todothetrystero.firebaseio.com/';
var ReactFire = require('reactfire');
var Firebase = require('firebase');


module.exports = React.createClass({

  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item['.key']);
    //this.bindAsArray(this.fb, 'thisItem');

  },
  getInitialState: function() {
    return {

      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  handleDeleteClick: function() {
    //console.log(this.props.item.text);
    //console.log(this.props.item['.key']);
    console.log(this.fb);
    this.fb.remove();
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },

  handleInputChange: function(event) {
    var update = {text: event.target.value, textChanged: true}
    this.setState(update)
  },
  handleSaveClick: function() {
    var update = {text: this.state.text}
    this.fb.update(update)
    this.setState({textChanged: false})
  },
  handleUndoClick: function() {
    var update = {text: this.props.item.text, textChanged: false}
    this.setState(update)

  },
  changesButtons: function() {
    if (this.state.textChanged) {
    return [
      <button className = "btn btn-default" onClick ={this.handleSaveClick}> Save </button>,
      <button className = "btn btn-default" onClick ={this.handleUndoClick}> Undo </button>
      ]
  } else return null
  },

  render: function() {
  //console.log(this.state.done);
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
            className = "form-control  style-4"
            disabled = {this.state.done}
            value={this.state.text}
            onChange = {this.handleInputChange}

            />
          <span className = "input-group-btn">
            //{this.changesButtons()}
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
