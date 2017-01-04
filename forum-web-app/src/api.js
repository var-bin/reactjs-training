"use strict";

// src/api.js

let API = {
  fetch() {
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
}
