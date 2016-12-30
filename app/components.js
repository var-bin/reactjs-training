"use strict";

// components.js

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: []
    }
  }

  _getComments() {
    return this.state.comments.map( (comment) => {
      return (<Comment
        author={comment.author}
        body={comment.body}
        avatarUrl={comment.avatarUrl}
        key={comment.id} />)
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

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
      avatarUrl: this.state.comments[0].avatarUrl
    };
    // concat works better than push
    // New array references help React stay fast
    this.setState({comments: this.state.comments.concat([comment])});
  }

  render() {
    const comments = this._getComments();

    return(
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
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

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: 0
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    if (!this._author.value || !this._body.value) {
      alert("Please enter your name and comment");
      return;
    }

    this.props.addComment(this._author.value, this._body.value);

    this._author.value = "";
    this._body.value = "";

    this.setState({
      characters: 0
    });
  }

  _getCharacterCount() {
    this.setState({
      characters: this._body.value.length
    });
  }

  _showCharacterCount() {
    return (
      <div>
        {`${this.state.characters} characters you have already typed`}
      </div>
    )
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>
          New comment
        </label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea} onKeyUp={this._getCharacterCount.bind(this)}></textarea>
          {this._showCharacterCount()}
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
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
