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
        <br />
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li className="breadcrumb-item active">Search</li>
          </ol>
          <AdvSearchBody />
        </div>
        <Footer />
      </div>
    );
  }
}

export default adSearch;
