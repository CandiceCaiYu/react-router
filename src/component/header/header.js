import React from "react";
import "./styles.less";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-login">您好，admin</div>
      </div>
    );
  }
}
