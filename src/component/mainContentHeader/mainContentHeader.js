import React from "react";

import "./styles.less";

export default class MainContentHeader extends React.Component {
  render() {
    return (
      <div className="main-content-header">
        您现在的位置：<span>首页</span> > <span>系统设置</span>
      </div>
    );
  }
}
