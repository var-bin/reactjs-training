"use strict";

class StoryBox extends React.Component {
  render() {
    const NOW = new Date();
    const TOPIC_LISTS = ["HTML", "JavaScript", "React"];
    
    return(
      <section>
        <h3>
          Story Box
        </h3>
        <p className="lead">
          Current time: {NOW.toTimeString()}
        </p>
        <ul>
          {TOPIC_LISTS.map(
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