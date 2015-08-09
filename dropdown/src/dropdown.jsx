// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./listitem');
//var List = require('./list');


module.exports = React.createClass ({




  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} />
    });

    return <div className = "dropdown">
        <Button
          className="btn-default dropdown-toggle"
          type="button" id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          title={this.props.title}
          subTitleClassName="caret"
          />
        <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1">{list}</ul>

    </div>
  }
})
