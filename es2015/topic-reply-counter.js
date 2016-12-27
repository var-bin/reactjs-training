"use strict";

class TopicReplyCounter {
  constructor(topicId, replies) {
    this.topicId = topicId;
    this.replies = replies;
    this.replyCount = this.replies.length;
  }
  
  addReply(reply) {
    
  }
  
  totalReplies() {
    return this.replies.filter(reply => !reply.isAbuse);
  }
  
  totalCount() {
    return this.replyCount;
  }
}