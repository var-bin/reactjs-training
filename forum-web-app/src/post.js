"use strict";

// src/post.js

import { API } from "./api";
import { POSTS_URI } from "./constants";

let Post = {
  findAll() {
    return API.fetch(POSTS_URI);
  }
};

export { Post };
