import React, { Component } from "react";
import "./Adbox.css";
import { AsyncSeriesHook } from "tapable";
import { FaBeer } from "react-icons/fa";

class AdBox extends Component {
  state = {
    userName: "Ishara Dhannjaya",
    profileImg: "",
    user_title: "Hair Coloring and Styling",
    userDescription: "dasdadsa das das das d asd asads adsa "
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
              src={this.props.propicURL}
              alt="profile picture"
              className="rounded-circle"
            />
            <br />
            <br />
            <p classNameName="lead">
              <div className="lable">{this.props.userName}</div>
              <div className="lable">
                <FaBeer />
                {this.props.location}
              </div>
            </p>
          </div>
          <div className="col-md-9">
            <div className="display-4">{this.props.Tagline}</div>
            <hr />
            <p>{this.props.description}</p>
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

export default AdBox;
