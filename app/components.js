"use strict";

// components.js

class CommentBox extends React.Component {
  _getComments() {
    const commentList = [
      {
        id: 1,
        author: "Morgan McCircuit",
        body: "Great picture!",
        avatarUrl: './assets/images/default-avatar.png'
      },
      {
        id: 2,
        author: "Bending Bender",
        body: "Excellent style!",
        avatarUrl: './assets/images/default-avatar.png'
      },
      {
        id: 3,
        author: "Bending Bender 1",
        body: "Excellent style!!!",
        avatarUrl: './assets/images/default-avatar.png'
      }
    ];

    return commentList.map( (comment) => {
      return (<Comment
        author={comment.author}
        body={comment.body}
        avatarUrl={comment.avatarUrl}
        key={comment.id}/>)
    })
  };

  _getCommentsTitle(commentsCount = 0) {
    if (commentsCount === 0) {
      return "No comments yet";
    } else if (commentsCount === 1) {
      return "1 comment"
    }

    return `${commentsCount} comments`;
  };

  _getPopularMessage(commentsCount = 0) {
    const POPULAR_COUNT = 10;

    if (commentsCount > POPULAR_COUNT) {
      return (
        <div>
          This post is getting really popular, don't miss out!
        </div>
      )
    }
  };

  render() {
    const comments = this._getComments();

    return(
      <div className="comment-box">
        <h3>
          Comments
        </h3>
        {this._getPopularMessage(comments.length)}
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      isAbusive: false
    };
  }

  _toggleAbuse(event) {
    event.preventDefault();

    this.setState(prevState => ({
      isAbusive: !prevState.isAbusive
    }));
  }

  render() {

    let commentBody;

    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment">
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
        <p className="comment-header">
          {this.props.author}
        </p>
        <p className="comment-body">
          {commentBody}
        </p>
        <div className="comment-actions">
          <a href="#">
            Delete comment
          </a>
          <a href="#" onClick={this._toggleAbuse.bind(this)}>
            Report as Abuse
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />, document.getElementById("robot-app")
);
