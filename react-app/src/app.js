import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";

import { hashHistory, Router, Route, Redirect } from 'react-router';
import { LTopMenu } from './layouts/l-top-menu';
import { PBlogPage } from './pages/p-blog';
import { PPicturePage } from './pages/p-picture';
import { PVideoPage } from './pages/p-video';

const App = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={LTopMenu}>
      <Route path="blog" component={PBlogPage} />
      <Route path="picture" component={PPicturePage} />
      <Route path="video" component={PVideoPage} />
    </Route>
  </Router>
);

jQuery(function() {
  ReactDOM.render(
    App,
    document.getElementById('comment-box'),
    function () {
      console.timeEnd('react-app');
    }
  );
})
