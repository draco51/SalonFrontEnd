import React, { Component } from "react";
import "./../Home/Home.css";
import PrimarySearch from "./../Search/primarySearch";

class HomeCover extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron-cover rounded-0">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">{this.props.subtitle}</p>
          <PrimarySearch />
        </div>
      </div>
    );
  }
}

export default HomeCover;
