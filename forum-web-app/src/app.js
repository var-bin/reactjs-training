"use strict";

// src/app.js

let Post = {
  findAll() {
    return new Promise( (resolve, reject) => {
      let uri = "http://localhost:3000/posts";
      let request = new XMLHttpRequest();

      request.open("GET", uri, true);
      request.onload = () => {
        let status = request.status;

        if (status >= 200 && status < 400) {
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = () => {
        reject(new Error("Something went wrong on the API"));
      }

      request.send();
    });
  }
};

let ui = {
  renderPosts(posts) {
    console.log(posts);
  }
};

Post.findAll()
.then(ui.renderPosts)
.catch( (error) => console.error("Error: ", error));
