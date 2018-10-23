import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/user_profile";
import advSearch from "./components/Search/advSearch";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/users/stylists/:id" component={Profile} />
          <Route exact path="/Search" component={advSearch} />
        </div>
      </Router>
    );
  }
}

export default App;
