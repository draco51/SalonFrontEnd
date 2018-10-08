import React, { Component } from "react";
import Header from "./../main/header";
import Footer from "./../main/footer";
import ProfileContent from "./profile-content";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron bg-white ">
          <div className="container" style={{ height: 900 }}>
            <ProfileContent />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
