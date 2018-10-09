import React, { Component } from "react";
import AdBox from "./../AdBox/AdBox";
import { FaBeer } from "react-icons/fa";
import PrimarySearch from "./../Search/primarySearch";

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:9008/api/stylists/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <AdBox
            key={item.id}
            userName={item.name}
            Tagline={item.profileTitle}
            description={item.description}
            location={item.location}
            propicURL={item.propicURL}
            profileURL={item.id}
          />
        ))}
      </div>
    );
  }
}

export default HomeBody;
