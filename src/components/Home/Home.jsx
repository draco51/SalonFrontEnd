import React, { Component } from "react";

import Header from "./../main/header";
import HomeCover from "./../main/home-cover";
import Footer from "./../main/footer";
import HomeBody from "./homeBody";
import PrimarySearch from "../Search/primarySearch/primarySearch";
import StatCover from "./statCover";
import axios from "axios";
import "./home.css";

class Home extends Component {
  // getUser = e => {
  //   e.preventDefault();
  //   const userName = e.target.elements.userName.value;
  //   axios.get(`https://api.github.com/users/${userName}`).then(res => {
  //     console.log(res);
  //     const repos = res.data.public_repos;
  //     this.setState({ repos });
  //   });
  // };

  state = {
    subtitle: "The Best Marketplace to Find and Hire Hair Stylist"
    // repos: null
  };

  render() {
    return (
      <div>
        <Header />
        <HomeCover subtitle={this.state.subtitle} />
        <StatCover />
        <hr />
        {/* <PrimarySearch getUser={this.getUser} /> */}
        {/* {this.state.repos ? (
          <p>No : {this.state.repos}</p>
        ) : (
          <p>Please enter a user name</p>
        )} */}
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Home;
