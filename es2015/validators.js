"use strict";

export function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}

export function isEmailAuthorized(email){
  const EMAIL_DOMAIN = "@codeschool.com";
  return email.indexOf(EMAIL_DOMAIN) > 0;
}