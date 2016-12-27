"use strict";

function TagManager(topicId){
  this.topicId = topicId;
}

TagManager.prototype.addTag = function(tagName){
  API.createTag(tagName, this.topicId);
};

TagManager.prototype.removeTag = function(tagName){
  API.deleteTag(tagName, this.topicId);
};
