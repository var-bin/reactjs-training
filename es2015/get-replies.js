"use strict";

export default function getReplies(topicId) {
  return new Promise(function () {
    _getRepliesFromTopic(topicId, function (data) {
      let replies = data.replies;
      
      if (replies) {
        
      } else {
        let error = new Error("An error occurred");
      }
    });
  });
}