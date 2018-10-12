import React, { Component } from "react";
import "./advResultBox.css";
// import Rating from "react-rating"; // freelancer rating rendering element
import StarRatingComponent from "react-star-rating-component";

class AdvResultBox extends Component {
  state = {};

  render() {
    return (
      <div
        className="container border "
        style={{ marginBottom: 10, backgroundColor: "#e6e6e6" }}
      >
        {/* <div className="jumbotron-Adbox"> */}
        <div className="row">
          <div className="col-sm-3 text-center" style={{ borderRight: 20 }}>
            <img
              src={this.props.propicURL}
              alt="profile"
              className="rounded-circle"
              width="100px"
              height="100px"
            />
            <br />
            <br />
            <p className="lead">
              <div className="lable">{this.props.userName}</div>
              <div className="lable">{this.props.location}</div>
            </p>
          </div>
          <div className="col-md-9">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={this.props.rating}
            />

            <div className="display-4">{this.props.tagline}</div>
            <hr />
            <p>{this.props.description}</p>
            <a
              className="btn btn-primary float-right"
              href={this.props.profileURL}
            >
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
