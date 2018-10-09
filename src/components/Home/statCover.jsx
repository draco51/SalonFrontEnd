import React, { Component } from "react";
import "./Home.css";

class StatCover extends Component {
  state = {};
  render() {
    return (
      <div className="coverContent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              {" "}
              <img
                src="https://image.flaticon.com/icons/svg/12/12195.svg"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h6>Best Rated</h6>
            </div>
            <div className="col-md-4">
              <img
                src="https://image.flaticon.com/icons/svg/13/13957.svg"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h6>400+ Members</h6>
            </div>
            <div className="col-md-4">
              {" "}
              <img
                src="https://image.flaticon.com/icons/svg/3/3596.svg"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h6>50 Jobs Completed</h6>
            </div>
          </div>
        </div>{" "}
        <hr />
      </div>
    );
  }
}

export default StatCover;
