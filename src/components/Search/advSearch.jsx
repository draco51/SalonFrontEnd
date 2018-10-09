import React, { Component } from "react";
import Header from "./../main/header";
import Footer from "./../main/footer";
import AdvSearchBody from "./advSearchBody";

class adSearch extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ height: 900 }}>
          <AdvSearchBody />
        </div>
        <Footer />
      </div>
    );
  }
}

export default adSearch;
