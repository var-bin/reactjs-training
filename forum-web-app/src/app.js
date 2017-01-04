"use strict";

// src/app.js

import { Post } from "./post";

let ui = {
  renderPosts(posts) {
    console.log(posts);
  }
};

Post.findAll()
.then(ui.renderPosts)
.catch( (error) => console.error("Error: ", error));
