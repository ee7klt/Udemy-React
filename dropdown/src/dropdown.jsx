// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');
//var List = require('./list');


module.exports = React.createClass ({




  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} />
    });

    return <div>
        <Button
          className="btn-default"
          title={this.props.title}
          subTitleClassName="caret"
          />
        <ul className = "dropdown-menu">{list}</ul>

    </div>
  }
})
