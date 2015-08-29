var React = require('react');
var rootUrl = 'https://todo123456.firebaseio.com/';
var ReactFire = require('reactfire');
var Firebase = require('firebase');


module.exports = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/' + this.props.item['.key']);
    this.bindAsArray(fb, 'item');

  },
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done
    }
  },
  handleButtonClick: function() {
    this.setState(
      {text:''}
    )
  },
  handleDoneChange: function(event) {
    this.setState({done: event.target.checked})
  },

  render: function() {
    //console.log(this.props.item)
    console.log(this.props.item['.key']);
    return <div className = "input-group">
        <span className = "input-group-addon">
          <input
            type="checkbox"
            checked = {this.state.done}
            onChange = {this.handleDoneChange}

            />
          </span>
          <input type="text" className = "form-control" value={this.state.text} />
          <span className = "input-group-btn">
            <button
              className="btn btn-default"
              onClick = {this.handleButtonClick}
              >
              Delete
            </button>
        </span>
    </div>

  }
})
