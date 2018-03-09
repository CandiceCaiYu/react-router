import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Home from "./home";
import About from "./about";
import Topics from "./topics";

export default class BasicExample extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <hr />
        </div>
      </HashRouter>
    );
  }
}
