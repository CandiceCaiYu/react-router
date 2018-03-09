import React from "react";
import Header from "./header/header";
import Main from "./main/main";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
