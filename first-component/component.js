"use strict";

class StoryBox extends React.Component {
  render() {
    const now = new Date();
    const topicLists = ["HTML", "JavaScript", "React"];
    
    return(
      <section>
        <h3>
          Story Box
        </h3>
        <p className="lead">
          Current time: {now.toTimeString()}
        </p>
        <ul>
          {topicLists.map(
            topic => <li className={topic}>{topic}</li>
          )}
        </ul>
      </section>
     );
  }
}

ReactDOM.render(
  <StoryBox />, document.getElementById('story-app')
);