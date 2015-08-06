var React = require('react');
var ThumbnailList = require('./thumbnail-list');


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
