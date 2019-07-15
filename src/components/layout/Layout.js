import React from "react";
import {connect} from "react-redux";

import "./layout.scss";


const Layout = props => {

  return (
    <div className="layout">
      <h1>Hello world</h1>
    </div>
  );
};

export default connect(null)(Layout);
