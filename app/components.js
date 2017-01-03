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

  componentWillMount() {
    this._fetchComments();
  }

  _fetchComments() {
    $.ajax({
      method: "GET",
      url: "./assets/comments.json",
      dataType: "json",
      success: (comments) => {
        this.setState({
          comments: comments
        })
      }
    });
  }

  _getComments() {
    return this.state.comments.map( (comment) => {
      return (<Comment
        author={comment.author}
        body={comment.body}
        avatarUrl={comment.avatarUrl}
        key={comment.id}
        onDelete={this._deleteComment.bind(this)} />)
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

  _getAvatars() {
    return this.state.comments.map( (comment) => {
      return ({
        avatarUrl: comment.avatarUrl,
        author: comment.author
      });
    });
  }

  _deleteComment(comment) {
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${comment.id}`
    });

    let comments = [...this.state.comments];
    let commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);

    this.state({ comments });
  }

  render() {
    const comments = this._getComments();

    return(
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <CommentAvatarList options={this._getAvatars()}/>
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

  _handleDelete(event) {
    event.preventDefault();

    if (confirm("Are you sure?")) {
      this.props.onDelete(this.props.comment);
    }
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
          <a href="#" onClick={this._handleDelete.bind(this)}>
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

class CommentAvatarList extends React.Component {
  render() {

    const { options = [] } = this.props;

    return (
      <div className="comment-avatars">
        <h4>Authors</h4>
        <ul>
          {options.map( (opt, i) => (
            <li key={i}>
              <img src={opt.avatarUrl} alt={opt.author}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class RemoveCommentConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      showConfirm: false


    };
  }

  render() {
    let confirmNode;
    if (this.state.showConfirm) {
      return (
        <span>
          <a href="#" onClick={this._confirmDelete.bind(this)}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage.bind(this)}> No</a>
        </span>
      );
    } else {
      confirmNode = <a href="" onClick={this._toggleConfirmMessage.bind(this)}>Delete comment?</a>;
    }
    return (
      <span>{confirmNode}</span>
    );
  }

  _toggleConfirmMessage(e) {
    e.preventDefault();

    this.setState({
      showConfirm: !this.state.showConfirm
    });
  }

  _confirmDelete(e) {
    e.preventDefault();
    this.props.onDelete();
  }
}

ReactDOM.render(
  <CommentBox />, document.getElementById("robot-app")
);
