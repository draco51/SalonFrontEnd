import React, { Component } from "react";
import "./profile.css";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Rating from "react-rating"; // freelancer rating rendering element
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  state = {
    skills: [],
    qualification: [],
    images: [],
    selectedDays: [],
    calendar: []
  };

  //Fetching props data arrays from parent component user_profile
  static getDerivedStateFromProps(nextProps) {
    return {
      skills: nextProps.skillsObj ? nextProps.skillsObj : [],
      qualification: nextProps.qualifcnObj ? nextProps.qualifcnObj : [],
      images: nextProps.images ? nextProps.images : [],
      calendar: nextProps.calendar ? nextProps.calendar : []
    };
  }

  //Handleing calendar functions
  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  render() {
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
            {/* --------------< Side Bar >-------------- */}
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
              {"  "}
              {this.props.userName}
            </h6>

            <span className="glyphicon glyphicon-envelope" />
            <h6 className="text-center">
              <MaterialIcon icon="location_on" size={20} />
              {"  "}
              {this.props.location}
            </h6>
            <hr />
            <span className="col-md-3 text-left">
              <h5>Skills</h5>
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
              <h5>Rate / Budget</h5>
              <div className="alert alert-warning ">
                $ {this.props.hourlyRate} /hr
              </div>
            </span>
            <hr />
            <span className="col-md-3 text-left">
              <h5>Qualitification</h5>
              {this.state.qualification.map(function(item) {
                return <li key={item.id}>{item.qualification}</li>;
              })}
              <hr />
              <a
                href="#"
                className="btn btn-primary btn-md btn-block"
                role="button"
                aria-pressed="true"
              >
                Contact Now
              </a>
            </span>
          </div>
          {/* --------------< /Side Bar >-------------- */}

          <div className="col-md-9">
            <div className="container text-right">
              <Rating
                placeholderRating={this.props.rating}
                readonly="true"
                direction="rtl"
              />
            </div>
            <h2>{this.props.tagline}</h2>
            <p>{this.props.description}</p>
            <hr />

            <span className="col-md-9 text-left">
              {/* --------------< Carousel >-------------- */}
              <h5>My Portfolio</h5>
              {this.state.images.length > 0 ? (
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
              ) : (
                <div className="card text-center">
                  Currently No images to show
                </div>
              )}
              <br />

              {/* --------------< /Carousel >-------------- */}

              {/* --------------< Calendar >-------------- */}
              <h5>My Calendar</h5>
              <div className="card text-center" style={{ padding: 20 }}>
                <h5 class="card-title">Select your dates</h5>
                <hr />
                <DayPicker
                  showOutsideDays
                  selectedDays={this.state.selectedDays}
                  onDayClick={this.handleDayClick}
                  canChangeMonth={false}
                  disabledDays={[
                    new Date(2018, 10, 12),
                    new Date(2017, 10, 13)
                  ]}
                />
                <div class="card-body">
                  <p class="card-text">
                    Please contact {this.props.userName} for futher confirmation
                  </p>
                  <a href="#" class="btn btn-success">
                    Continue
                  </a>
                </div>
              </div>
              {/* --------------< /Calendar >-------------- */}
              <span className="col-md-9 text-left" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
