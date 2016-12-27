"use strict";

import { isTopicValid, isEmailAuthorized } from "./validators";

let topic = {
  title: "ES2015",
  author: { name: "Sam", isBlocked: false }
};

isTopicValid(topic);

isEmailAuthorized(author.email);