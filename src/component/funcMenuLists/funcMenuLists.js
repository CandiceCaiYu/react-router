import React from "react";
import { Route, NavLink } from "react-router-dom";
import FuncMenuList from "../funcMenuList/funcMenuList";
import About from "../about";
import Topics from "../topics";

import "./styles.less";
export default class FuncMenuLists extends React.Component {
  render() {
    let { allLists } = this.props;
    return (
      <div class="lists">
        <ul class="lists-all">
          {/* {allLists &&
            allLists.length > 0 &&
            allLists.map(item => {
              return (
                <li className="lists-list" key={item.id}>
                  <FuncMenuList listData={item} />
                </li>
              );
            })} */}

          <NavLink to="/" className="lists-item" activeClassName="activeStyle">
            系统设置
          </NavLink>
          <NavLink
            to="../topics"
            className="lists-item"
            activeClassName="activeStyle"
          >
            网络设置
          </NavLink>
          {/* <NavLink className="list-item" activeClassName="activeStyle">
            语言设置
          </NavLink> */}
        </ul>
        <Route exact path="/" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    );
  }
}
