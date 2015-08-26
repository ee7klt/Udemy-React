var React = require('react');


module.exports = React.createClass({
  getInitialState: function() {
    return {text: this.props.item.text}
  },
  handleButtonClick: function() {
    this.setState(
      {text:''}
    )
  },

  render: function() {
    console.log(this.props.item)
    return <div className = "input-group">
        <span className = "input-group-addon">
          <input type="checkbox" ></input>
          <input type="text" className = "form-control" value={this.state.text}></input>
          <span className = "input-group-btn">
            <button
              className="btn btn-default"
              onClick = {this.handleButtonClick}
              >
              Delete
            </button>
          </span>
        </span>
    </div>
  }
})
