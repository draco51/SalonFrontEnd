import React, { Component } from "react";
import AdvResultBox from "./advResultBox";

class advSearchBody extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 text-center" />
          <div className="col-md-10">
            <AdvResultBox />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
