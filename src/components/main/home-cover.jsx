import React, { Component } from "react";
import "./../Home/Home.css";

class HomeCover extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron-cover rounded-0">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default HomeCover;
