"use strict";

// src/api.js

let API = {
  fetch(path) {
    return new Promise( (resolve, reject) => {
      let uri = `http://localhost:3000/${path}`;
      let request = new XMLHttpRequest();

      request.open("GET", path, true);
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

export { API };
