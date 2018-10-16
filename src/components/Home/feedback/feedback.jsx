import React, { Component } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container">
        <div className="display-4 text-center">
          Testimonies from our latest members
        </div>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              version={4}
              autoplay={this.state.autoplay}
              pauseOnVisibility={true}
              onSelect={this.visiableOnSelect}
              slideshowSpeed={2000}
            >
              {/* -------------------------------------- */}
              <div
                style={{
                  ...styles,
                  backgroundColor: "#f1f1f1",
                  paddingTop: 50
                }}
              >
                <div
                  className="carousel text-center"
                  style={{
                    paddingLeft: 40
                  }}
                >
                  <div className="row">
                    <div className="col col-lg-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                        alt="profile picture"
                        className="rounded-circle"
                        width="180px"
                        height="200px"
                      />
                    </div>

                    <div className="col col-lg-9">
                      <h4>Fewer mixups means more clients in our chairs!</h4>
                      <div
                        className="container"
                        style={{
                          paddingLeft: 100,
                          paddingRight: 100,
                          paddingTop: 40
                        }}
                      >
                        "We love Setmore here at Salon A! The online booking
                        feature and text confirmation makes scheduling a
                        pleasure!! Our clients LOVE it!!"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-center"> </div>
                <div className="carousel-caption">Loren O'Hara</div>
              </div>
              {/* -------------------------------------- */}
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
export default Feedback;
