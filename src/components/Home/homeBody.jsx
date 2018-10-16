import React, { Component } from "react";
import AdBox from "./../AdBox/AdBox";
import PrimarySearch from "../Search/primarySearch/primarySearch";
import Feedback from "./feedback/feedback";

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      filteredItems: [],
      proURL: "",
      alertMsg: ""
    };
  }

  //Search term input filtering
  HandleChange = event => {
    console.log(event);
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item) {
      return (
        item.name
          .toString()
          .toLowerCase()
          .search(event.target.value.toString().toLowerCase()) !== -1 ||
        item.location
          .toString()
          .toLowerCase()
          .search(event.target.value.toString().toLowerCase()) !== -1 ||
        item.profileTitle
          .toString()
          .toLowerCase()
          .search(event.target.value.toString().toLowerCase()) !== -1
      );
    });
    // console.log(updatedList);
    this.setState({ filteredItems: updatedList, alertMsg: "No results found" });
  };

  //Fetching freelancer profiles from API
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

  //Rendering class
  render() {
    return (
      <div>
        <br />
        <div className="conainer text-center">
          Find your perfect hair stylist and book them now.
        </div>
        <PrimarySearch HandleChange={this.HandleChange} id="primarySearchbox" />

        {this.state.filteredItems.length > 0 ? (
          <div>
            {this.state.filteredItems.map(item => (
              <AdBox
                key={item.id}
                userName={item.name}
                Tagline={item.profileTitle}
                description={item.description}
                location={item.location}
                propicURL={item.propicURL}
                profileURL={"http://localhost:3000/users/stylists/" + item.id}
              />
            ))}
          </div>
        ) : (
          <div className="alert alert-dark-sm text-center" role="alert">
            {this.state.alertMsg}
          </div>
        )}
        {this.state.filteredItems.length ? (
          <p />
        ) : (
          <div className="container">
            {" "}
            <Feedback />
          </div>
        )}
      </div>
    );
  }
}

export default HomeBody;
