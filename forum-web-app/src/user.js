"use strict";

// src/user.js

import { API } from "./api";

let User = {
  findRecent() {
    return API.fetch("activeUsers");
  }
};

export { User };
