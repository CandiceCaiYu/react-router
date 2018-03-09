import React from "react";
import { Route, Link } from "react-router-dom";
import About from "../about";
import Topics from "../topics";

import MainContentBox from "../mainContentBox/mainContentBox";

import "./styles.less";
export default class FuncMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  showItem = () => {
    let currStateShow = this.state.show;
    this.setState({
      show: !currStateShow
    });
  };
  render() {
    let { listData } = this.props;
    let listStyle = {
      display: this.state.show ? "block" : "none"
    };
    return (
      <div className="list">
        <h3 onClick={this.showItem}>{listData.title}</h3>
        <ul className="list-all" style={listStyle}>
          <NavLink
            to="../about"
            className="list-item"
            activeClassName="activeStyle"
          >
            系统设置
          </NavLink>
          <NavLink
            to="../topics"
            className="list-item"
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
