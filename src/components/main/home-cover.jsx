import React, { Component } from "react";
import "./../Home/home.css";
import PrimarySearch from "../Search/primarySearch/primarySearch";
import Feedback from "./../Home/feedback/feedback";

class HomeCover extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron-cover rounded-0">
        <div className="container" />
        <div className="container">
          <h1 className="display-4">Welcome to ColorMe</h1>

          <p className="lead">{this.props.subtitle}</p>
          <br />
          <a
            href="#"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Join Now
          </a>
          {"    "}
          <a
            href="#"
            className="btn btn-secondary btn-lg active"
            role="button"
            aria-pressed="true"
          >
              Log In
          </a>
        </div>
      </div>
    );
  }
}

export default HomeCover;
