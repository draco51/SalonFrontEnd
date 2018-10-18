import React, { Component } from "react";
import logo from "./../../img/logo.png";
import MaterialIcon, { colorPalette } from "material-icons-react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer style={{ backgroundColor: "#e6e6e6", paddingLeft: 60 }}>
        <div className="row ">
          <div className="col-12 col-md ">
            <img src={logo} alt={"logo"} width="40" height="40" />
               ColorMe
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted">About us</a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  How it Works
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Sitemap
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Freelancers / Hair stylists
                </a>
              </li>
              <li>
                <a className="text-muted" href="#" />
              </li>
              <li>
                <a className="text-muted" href="#">
                  Salon owners
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Advertise with us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Terms</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Stay in touch</h5>
            <div>
              <img
                className="FooterNew-appStoreIcon-image"
                src="https://vignette.wikia.nocookie.net/ichc-channel/images/e/e1/Android-App-Store.png/revision/latest?cb=20160426125348"
                alt="Apple App Store Badge"
                width="40%"
                height="40%"
              />
            </div>
            <img
              className="FooterNew-appStoreIcon-image"
              src="https://www.shareicon.net/download/2016/07/08/117705_facebook_512x512.png"
              alt="Social media tab"
              width="12%"
              height="20%"
            />
            <img
              className="FooterNew-appStoreIcon-image"
              src="https://png.pngtree.com/element_our/md/20180626/md_5b321fcf15fb3.png"
              alt="Social media tab"
              width="13%"
              height="23%"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
