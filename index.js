import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./src/component/home";
export default class App extends React.Component {
  render() {
    return <div>Hello Worldgggg!</div>;
  }
}

render(<Home />, document.getElementById("root"));
