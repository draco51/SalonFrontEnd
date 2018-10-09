import React, { Component } from "react";
import "./AdvResultBox.css";

class AdvResultBox extends Component {
  state = {
    userName: "Ishara Dhannjaya",
    location: "Colombo",
    Tagline: "Hair Coloring and Styling",
    description: "dasdadsa das das das d asd asads adsa "
  };
  render() {
    return (
      <div
        className="container border "
        style={{ marginBottom: 10, backgroundColor: "#e6e6e6" }}
      >
        {/* <div className="jumbotron-Adbox"> */}
        <div className="row">
          <div className="col-md-3 text-center" style={{ borderRight: 20 }}>
            <img
              src={this.state.propicURL}
              alt="profile picture"
              className="rounded-circle"
              width="100px"
              height="100px"
            />
            <br />
            <br />
            <p className="lead">
              <div className="lable">{this.state.userName}</div>
              <div className="lable">{this.state.location}</div>
            </p>
          </div>
          <div className="col-md-9">
            <div className="display-4">{this.state.Tagline}</div>
            <hr />
            <p>{this.state.description}</p>
            <a className="btn btn-primary float-right" href="#">
              View More
            </a>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

export default AdvResultBox;
