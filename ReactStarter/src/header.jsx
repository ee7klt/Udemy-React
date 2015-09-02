var React = require('react');


module.exports = React.createClass({

  getInitialState: function() {
    return {text: ''};
  },
  handleChange: function(event) {
    //console.log(event.target.value)
    this.setState({text: event.target.value})
  },
  handleButtonClick: function() {
    //console.log(this.state.text)
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    this.setState({text:''});
  },

  render: function(){
    return <div className="input-group">
      <input
        value = {this.state.text}
        onChange = {this.handleChange}
        type="text"
        className = "form-control"
        placeholder = "getting things done!"
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
