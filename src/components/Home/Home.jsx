import React, { Component } from "react";

import Header from "./../main/header";
import HomeCover from "./../main/home-cover";
import Footer from "./../main/footer";
import HomeBody from "./homeBody";

import "./Home.css";

class Home extends Component {
  state = { subtitle: "The Best Marketplace to Find and Hire Hair Stylist" };
  render() {
    return (
      <div container>
        <Header />
        <HomeCover subtitle={this.state.subtitle} />
        <div className="coverContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
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
              <div class="col-md-4">
                <img
                  src="https://image.flaticon.com/icons/svg/13/13957.svg"
                  width="100px"
                  height="100px"
                />
                <br />
                <br />
                <h6>400+ Members</h6>
              </div>
              <div class="col-md-4">
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
        </div>
        <hr />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Home;
