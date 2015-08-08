var options = {
thumbnailData: [{
  title: 'Upvote',
  number: 5,
  header: 'Learn React',
  description:' React is fantastic!',
  imageURL: 'http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'
},{
  title: 'Favorite',
  number: 10,
  header: 'Learn Gulp',
  description:' Gulp will speed up your development workflow!',
  imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
}]
};
// react, please render this class
//3. pass options object as second element of createElement
//var element = React.createElement(Badge, options);
// element = cookie. instantiated element of the cookie class

var thumbnail = React.createElement(ThumbnailList, options);

//react, after render class, place in body tag
//React.render(element, document.querySelector('.target'));
React.render(thumbnail, document.querySelector('.target'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    //1. replace qualities with reference to this.props elements
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
  }
});

var ThumbnailList = React.createClass ({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )

  }

})
//2. create options object

var Thumbnail = React.createClass ({displayName: "Thumbnail",
  render: function () {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageURL}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
})
