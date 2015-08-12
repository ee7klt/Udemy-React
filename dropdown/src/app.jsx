var React = require('react');
var Dropdown = require('./dropdown');


var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [  // List of items to show in the dropdown
    'Raw cocoa gluten-free chocolate cake',
    'Coconut cream cashew flour souffle',
    'Cendol'
  ]
  //,
  //whenItemClicked: function() {console.log("hi from app");}
};




var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
