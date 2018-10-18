import React, { Component } from "react";

import Header from "./../main/header";
import HomeCover from "./../main/home-cover";
import Footer from "./../main/footer";
import HomeBody from "./homeBody";
import PrimarySearch from "../Search/primarySearch/primarySearch";
import StatCover from "./statCover";
import axios from "axios";
import "./home.css";
import posed from "react-pose";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

class Home extends Component {
  state = {
    subtitle: "The Best Marketplace to Find and Hire Hair Stylist"
  };

  render() {
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
