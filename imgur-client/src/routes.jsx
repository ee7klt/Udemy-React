var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Child1 = require('./components/child1');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');




module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path = "topics/:id" component={Topic}></Route>
      <Route path = "detail/:id" component={ImageDetail}></Route>
    </Route>

  </Router>
)
