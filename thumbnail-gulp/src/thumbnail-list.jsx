var Thumbnail = require('thumbnail');
// go find component thumbnail and store it in variable Thumbnail
// variable Thumbnail is now class Thumbnail


var ThumbnailList = React.createClass ({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return <Thumbnail {...thumbnailProps}/>
    });

    return <div>
      {list}
    </div>

  }

})
