"use strict";

// src/app.js

let Post = {
  findAll() {
    return new Promise( (resolve, reject) => {
      resolve("OK posts!");
    });
  }
};

let ui = {
  renderPosts(posts) {
    console.log(posts);
  }
};

Post.findAll().then(ui.renderPosts);
