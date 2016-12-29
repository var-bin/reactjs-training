"use strict";

// components.js

class CommentBox extends React.Component {
  _getComments() {
    const commentList = [
      {
        id: 1,
        author: "Morgan McCircuit",
        body: "Great picture!"
      },
      {
        id: 2,
        author: "Bending Bender",
        body: "Excellent style!"
      },
      {
        id: 3,
        author: "Bending Bender 1",
        body: "Excellent style!!!"
      }
    ];

    return commentList.map( (comment) => {
      return (<Comment author={comment.author} body={comment.body} key={comment.id}/>)
    })
  };

  _getCommentsTitle(commentsCount) {
    if (commentsCount === 0) {
      return "No comments yet";
    } else if (commentsCount === 1) {
      return "1 comment"
    }

    return `${commentsCount} comments`;
  };

  render() {
    const comments = this._getComments();

    return(
      <div className="comment-box">
        <h3>
          Comments
        </h3>
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
  render() {
    return(
      <div className="comment">
        <p className="comment-header">
          {this.props.author}
        </p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete comment
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />, document.getElementById("robot-app")
);
