import React, { Component } from "react";
import "./profile.css";

class ProfileContent extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Users</a>
            </li>
            <li class="breadcrumb-item active">Username</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-3 text-center">
            <div>
              <img
                alt="Bootstrap Image Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                class="rounded-circle"
              />
            </div>
            <br />

            <h6 class="text-center">Name Naame</h6>

            <span class="glyphicon glyphicon-envelope" />
            <h6 class="text-center">Location</h6>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Skills</h6>
              <ul>
                <li>Skill 1</li>
              </ul>
            </span>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Rate / Budget</h6>
              <div className="alert alert-warning ">$13 Per Hour</div>
            </span>
            <hr />
            <span className="col-md-3 text-left">
              <h6>Qualitification</h6>
              <ul>
                <li>HairStyling</li>
              </ul>
            </span>
          </div>
          <div class="col-md-9">
            <h2>Profile Title / Tagline</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <hr />
            <span className="col-md-9 text-left">
              <h6>Calendar</h6>
            </span>

            <hr />
            <span className="col-md-9 text-left">
              <h6>Portfolio</h6>
            </span>
            <div class="carousel slide" id="carousel-765614">
              <ol class="carousel-indicators">
                <li
                  data-slide-to="0"
                  data-target="#carousel-765614"
                  class="active"
                />
                <li data-slide-to="1" data-target="#carousel-765614" />
                <li data-slide-to="2" data-target="#carousel-765614" />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap First"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>First Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Second"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>Second Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>Third Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <a
                class="carousel-control-prev"
                href="#carousel-765614"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" />{" "}
                <span class="sr-only">Previous</span>
              </a>{" "}
              <a
                class="carousel-control-next"
                href="#carousel-765614"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" />{" "}
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
