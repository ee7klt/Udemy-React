
// render the detail page for a single image
// gets here from image-preview



var React=require('react');
var Reflux = require('reflux');
var Actions = require('../actions')
var DetailStore = require('../stores/detail-store')
var CommentsStore = require('../stores/comments-store')
var CommentBox = require('./comment-box')

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(DetailStore, 'onChange'),
    Reflux.listenTo(CommentsStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      image: [],
      comments: []
    }
  },

  onChange: function() {
    this.setState({
      image: DetailStore.image,
      comments: CommentsStore.comments
    })
    console.log("image detail is calling the getImage from store")
    console.log("image is ")
    console.log(this.state.image)
    console.log("comments is ")
    console.log(this.state.comments[0])
  },

  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
    console.log("mounting getImage")
  },

  // componentWillReceiveProps not necessary here
  // because when navigating to a different image
  // we're moving to a completely different component
  // not a different id within the same component as was
  // the case with topic. true?



  render: function() {
    return <div className="image-detail">
      {this.renderContent()}
    </div>
  },

  renderContent: function() {
    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>{this.state.image.title}</h4>
        </div>
        <div className="panel-body">
              {this.renderImage()}
        </div>
        <div className="panel-footer">
          <h5>{this.state.image.description}</h5>
        </div>
      </div>
      <h3>Comments</h3>
      {this.renderComments()}
    </div>
  },

  renderComments: function() {
    if (!this.state.comments) {
      return null
    } else {
      return <div>
        <CommentBox comments = {this.state.comments[0]}/>
        </div>
    }
  },

  renderImage: function() {
    if (this.state.image.animated) {
      return <video preload="auto" autoPlay loop webkit-playsinline>
        <source src={this.state.image.mp4} type="video/mp4"></source>
      </video>
    } else return <img src = {this.state.image.link} />
  }



})
