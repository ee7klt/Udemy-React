var React = require('react');


module.exports = React.createClass({

  render: function() {
    console.log(this.props.item)
    return <li>
      {this.props.item.text} {this.props.item['.key']}  {''+ this.props.item.done}

    </li>
  }
})
