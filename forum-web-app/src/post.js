"use strict";

// src/post.js

import { API } from "./api";

let Post = {
  findAll() {
    return API.fetch("posts");
  }
};

export { Post };
