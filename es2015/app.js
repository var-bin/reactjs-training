"use strict";

import isTopicValid from "./is-topic-valid.js";

let topic = {
  title: "ES2015",
  author: { name: "Sam", isBlocked: false }
};

isTopicValid(topic);