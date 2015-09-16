var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Child1 = require('./components/child1');




module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path = "#/1" component={Child1}></Route>
    </Route>
  </Router>
)
