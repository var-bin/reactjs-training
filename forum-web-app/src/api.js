"use strict";

// src/api.js

import { BASE_URI, ERROR_MESSAGE } from "./constants";

let API = {
  fetch(path) {
    return new Promise( (resolve, reject) => {
      let uri = `${BASE_URI}/${path}`;
      let request = new XMLHttpRequest();

      request.open("GET", uri, true);
      request.onload = () => {
        let status = request.status;

        if (status >= 200 && status < 400) {
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = () => {
        reject(new Error(ERROR_MESSAGE));
      }

      request.send();
    });
  }
};

export { API };
