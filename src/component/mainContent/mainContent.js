import React from "react";
import { Route } from "react-router-dom";
import MainContentHeader from "../mainContentHeader/mainContentHeader";
import MainContentBox from "../mainContentBox/mainContentBox";
import About from "../about";

import "./styles.less";

export default class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <MainContentHeader />
        <Route exact path="/" component={MainContentBox} />
        {/* <Route path="../about.js" component={About} /> */}
      </div>
    );
  }
}
