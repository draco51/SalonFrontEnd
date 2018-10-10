import React, { Component } from "react";
import "./profile.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ProfileContent extends Component {
  state = {
    skills: [],
    qualification: [],
    images: []
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      skills: nextProps.skillsObj ? nextProps.skillsObj : [],
      qualification: nextProps.qualifcnObj ? nextProps.qualifcnObj : [],
      images: nextProps.images ? nextProps.images : []
    };
  }

  render() {
    console.log(this.props.skillsObj);

    return (
      <div className="container-fluid">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Users</a>
            </li>
            <li className="breadcrumb-item active">david9494</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-3 text-center">
            <div>
              <img
                alt="Bootstrap Image Preview"
                src={this.props.propicURL}
                className="rounded-circle"
              />
            </div>
            <br />

            <h6 className="text-center">
              <MaterialIcon icon="account_circle" size={20} />
              {this.props.userName}
            </h6>

            <span className="glyphicon glyphicon-envelope" />
            <h6 className="text-center">
              <MaterialIcon icon="location_on" size={20} />

              {this.props.location}
            </h6>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Skills</h6>
              {this.state.skills ? (
                <div>
                  {this.state.skills.map(function(item) {
                    return <li key={item.id}>{item.skill}</li>;
                  })}
                </div>
              ) : (
                <div>No Skills to Show</div>
              )}
            </span>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Rate / Budget</h6>
              <div className="alert alert-warning ">
                $ {this.props.hourlyRate} /hr
              </div>
            </span>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Qualitification</h6>
              {this.state.qualification.map(function(item) {
                return <li key={item.id}>{item.qualification}</li>;
              })}
            </span>
          </div>
          <div className="col-md-9">
            <h2>{this.props.tagline}</h2>
            <p>{this.props.description}</p>
            <hr />
            <span className="col-md-9 text-left">
              <h6>Calendar</h6>
            </span>

            <hr />
            <span className="col-md-9 text-left">
              <h6>My Portfolio</h6>

              <Carousel autoPlay="true" emulateTouch="true">
                {this.state.images.map(function(item) {
                  return (
                    <div>
                      <img key={item.id} src={item.imageURL} />
                      <p className="legend">{item.description}</p>
                    </div>
                  );
                })}
              </Carousel>
              <hr />
              <span className="col-md-9 text-left">
                <h6>Contact me</h6>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
