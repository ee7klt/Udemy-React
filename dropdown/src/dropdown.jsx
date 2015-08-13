// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');
//var List = require('./list');


module.exports = React.createClass ({

  handleButtonClick: function() {
    //this.state.open ^= true;
    this.setState({open: !this.state.open});
  },

  getInitialState: function() {
    return {
      open: false,
      itemTitle: this.props.title
    }
  },

  handleItemClick: function(item) {
    console.log(item);
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick}
              itemClass={(this.state.itemTitle === item) ? "active":""}/>
    }.bind(this));

    return <div className="dropdown">
        <Button
          whenClicked = {this.handleButtonClick}
          className="btn-default"
          title = {this.state.itemTitle}
          subTitleClassName="caret"
          />
        <ul className = {"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>

    </div>
  }
})
