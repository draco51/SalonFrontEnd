import React, { Component } from "react";
import "./../Home/Home.css";
import PrimarySearch from "./../Search/primarySearch";

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
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Join Now
          </a>
          {"    "}
          <a
            href="#"
            class="btn btn-secondary btn-lg active"
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
