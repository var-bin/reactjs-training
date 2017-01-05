import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import { CommentBox } from "./components/comment-box";

import { Router, Route } from 'react-router';
import { LTopMenu } from './layouts/l-top-menu';

const App = (
  <Router>
    <Route path="/" component={LTopMenu} ></Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    App,
    document.getElementById('comment-box'),
    function () {
      console.timeEnd('react-app');
    }
  );
})
