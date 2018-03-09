import React from "react";
import FuncMenu from "../funcMenu/funcMenu";
import MainContent from "../mainContent/mainContent";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.less";

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <FuncMenu />
          <MainContent />
        </div>
      </Router>
    );
  }
}
