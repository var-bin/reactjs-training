"use strict";

getActiveUsers(15, function (data) {
  let userNameDivs = appendUserNames(  );
  
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb) {
  _fetchTopicInfo("/topics/" + id, function (data) {
    cb(data);
  });
}