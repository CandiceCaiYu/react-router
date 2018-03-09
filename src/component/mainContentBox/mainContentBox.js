import React from "react";
import { NavLink, Route } from "react-router-dom";
import Topics from "../topics";
import About from "../about";

import "./styles.less";

export default class MainContentBox extends React.Component {
  render() {
    return (
      <div className="main-content-box">
        <ul className="main-content-box-nav">
          <li className="main-content-box-nav-item">
            <NavLink to="/about" activeClassName="active">
              语文
            </NavLink>
          </li>
          <li className="main-content-box-nav-item">
            <NavLink to="/topics" activeClassName="active">
              数学
            </NavLink>
          </li>
          {/* <li className="main-content-box-nav-item">
            <NavLink activeClassName="active">英语</NavLink>
          </li> */}
        </ul>

        <Route path="/about" component={About} />
        <Route exact path="/" component={Topics} />
      </div>
    );
  }
}
