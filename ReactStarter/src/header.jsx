var React = require('react');


module.exports = React.createClass({

  getInitialState: function() {
    return {text: 'hello'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value})
  },

  render: function(){
    return <div className="input-group">
      <input
        value = {this.state.text}
        onChange = {this.handleChange}
        type="text"
        className = "form-control"
      />
      <span className="input-group-btn">
        <button
          onClick={this.handleButtonClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
    </div>
  }
})
