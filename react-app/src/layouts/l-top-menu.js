"use strict";

// src/layouts/l-top-menu.js

import React from 'react';
import { Link } from 'react-router';

class LTopMenu extends React.Component {
  render() {
    return (
      <div>
        <nav className="top-menu">
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/picture">Picture</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export { LTopMenu };
