"use strict";

// src/user.js

import { API } from "./api";
import { ACTIVE_USERS_URI } from "./constants";

let User = {
  findRecent() {
    return API.fetch(ACTIVE_USERS_URI);
  }
};

export { User };
