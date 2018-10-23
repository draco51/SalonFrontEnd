import React, { Component } from "react";

import Header from "./../main/header";
import HomeCover from "./../main/home-cover";
import Footer from "./../main/footer";
import HomeBody from "./homeBody";
import StatCover from "./statCover";
import "./home.css";

class Home extends Component {
  state = {
    subtitle: "The Best Marketplace to Find and Hire Hair Stylist"
  };

  render() {
    console.log("env data => ", process.env);
    return (
      <div>
        <Header />
        <HomeCover subtitle={this.state.subtitle} />
        <StatCover />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Home;
