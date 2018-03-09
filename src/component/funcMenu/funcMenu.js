import React from "react";
import FuncMenuLists from "../funcMenuLists/funcMenuLists";
import { data } from "../../fakeData";

import "./styles.less";

export default class FuncMenu extends React.Component {
  render() {
    return (
      <div className="func-menu">
        <h2 className="func-menu-title">功能菜单</h2>
        <FuncMenuLists />
      </div>
    );
  }
}
