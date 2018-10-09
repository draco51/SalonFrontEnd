import React, { Component } from "react";
import AdvResultBox from "./advResultBox";
import SearchFilters from "./searchFilters";

class advSearchBody extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 text-center">
            <SearchFilters />
          </div>
          <div className="col-md-10">
            <AdvResultBox />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
