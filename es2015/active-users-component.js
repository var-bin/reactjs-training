"use strict";

function ActiveUsersComponent(target, topicId) {
  this.targetElement = target;
  this.topicId = topicId;
}

ActiveUsersComponent.prototype.render = function () {
  getActiveUsers(this.topicId, function (data) {
    let userNameDivs = appendUserNames(...data.userNames);
    
    appendToSidebar(this.targetElement, userNameDivs);
  });
};