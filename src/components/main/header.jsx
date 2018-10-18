import React, { Component } from "react";
import "./main.css";
import logo from "./../../img/logo.png";
import MaterialIcon, { colorPalette } from "material-icons-react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fliud">
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          style={{ paddingLeft: 60, padding: 20 }}
        >
          <a
            className="navbar-brand"
            href="http://localhost:3000"
            style={{ paddingLeft: 20 }}
          >
            <div className="display-4">
              {" "}
              <img src={logo} alt={"logo"} width="60" height="60" /> ColorMe
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/">
                  <h5>
                    <img
                      src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-hi.png"
                      width="17"
                      height="22"
                      style={{ paddingBottom: 5 }}
                    />
                      Find Workers   |
                  </h5>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/">
                  <h5>How it works   </h5>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
