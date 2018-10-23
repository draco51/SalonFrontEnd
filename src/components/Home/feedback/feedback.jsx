import React, { Component } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import axios from "axios";

const styles = { height: 400, width: "100%" };

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      testimonies: []
    };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:9008/resource/testimonies`)
      .then(res => this.setState({ testimonies: res.data }))
      .catch(err => console.log(err));
  }

  onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    // console.log(`visiable onSelect active=${active}`);
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
    // console.log(this.state.testimonies);
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
              {/* ------------------items rendering-------------------- */}
              {this.state.testimonies.map(item => (
                <div
                  key={item.id}
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
                      <div className="col col-sm-3 border-right">
                        <img
                          id={item.id}
                          src={item.imageURL}
                          alt="profile picture"
                          className="rounded-circle"
                          width="180px"
                          height="200px"
                        />
                      </div>

                      <div className="col col-sm-9">
                        <h4>{item.title}</h4>
                        <div
                          id={item.id}
                          className="container"
                          style={{
                            paddingLeft: 100,
                            paddingRight: 100,
                            paddingTop: 40
                          }}
                        >
                          <i>{item.description}</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-center"> </div>
                  <div
                    className="carousel-caption"
                    id={item.id}
                    style={{ color: "black" }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}

              {/* -------------------/items rendering------------------- */}
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
