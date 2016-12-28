"use strict";

export default function getReplies(topicId) {
  return new Promise(function (resolve, reject) {
    _getRepliesFromTopic(topicId, function (data) {
      let replies = data.replies;
      
      if (replies) {
        resolve(replies);
      } else {
        let error = new Error("An error occurred");
        
        reject(error);
      }
    });
  });
}