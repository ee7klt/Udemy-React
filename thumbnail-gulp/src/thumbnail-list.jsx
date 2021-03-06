var React = require('react');
var Thumbnail = require('./thumbnail');
// go find component thumbnail and store it in variable Thumbnail
// variable Thumbnail is now class Thumbnail


module.exports = React.createClass ({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return <Thumbnail {...thumbnailProps}/>
    });

    return <div>
      {list}
    </div>

  }

})
