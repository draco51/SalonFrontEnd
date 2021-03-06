import React, { Component } from "react";
import AdvResultBox from "./advResultBox/advResultBox";
import SearchFilters from "./searchFilters";
import { func } from "prop-types";

class advSearchBody extends Component {
  state = {
    items: [],
    filtereditems: [],
    locationOptions: [],
    ratingOptions: []
  };

  //Returning Location list array for mapping
  getLocationList(item) {
    return { value: item.id, label: item.location, term: "location" };
  }
  getRatingList(item) {
    return { value: item.id, label: item.rating, term: "rating" };
  }

  //Loading freelancer profiles from API
  componentDidMount() {
    fetch("http://127.0.0.1:9008/api/stylists/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });

        ////Getting Location List
        let locationOptions = this.state.items.map(this.getLocationList);
        this.setState({ locationOptions });
        console.log("location options- ", this.state.locationOptions);
        ////Getting rating List
        let ratingOptions = this.state.items.map(this.getRatingList);
        this.setState({ ratingOptions });
        console.log("rating options- ", this.state.ratingOptions);
      });
  }

  //Search term from location input filtering
  isLocation(event) {
    return event.term.toString().toLowerCase() == "location" ? true : false;
  }

  HandleLocationChange = event => {
    console.log("Event data = > ", event);
    console.log(this.isLocation(event));
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item) {
      return (
        item.location
          .toString()
          .toLowerCase()
          .search(event.label.toString().toLowerCase()) !== -1
      );
    });
    console.log("Updated list", updatedList);
    this.setState({ filteredItems: updatedList });
  };

  //Renderin
  render() {
    // console.log(this.state.locationOptions); //rendering data in console for testing

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 text-center">
            <SearchFilters
              locationOptions={this.state.locationOptions}
              ratingOptions={this.state.ratingOptions}
              handleChangeLocation={this.HandleLocationChange}
              handleChangeRating={this.HandleLocationChange}
            />
          </div>
          <div className="col-sm-9">
            {this.state.filteredItems ? (
              <React.Fragment>
                {this.state.filteredItems.map(item => (
                  <AdvResultBox
                    key={item.id}
                    userName={item.name}
                    tagline={item.profileTitle}
                    description={item.description}
                    location={item.location}
                    propicURL={item.propicURL}
                    hourRate={item.hourRate}
                    rating={item.rating}
                    profileURL={
                      "http://localhost:3000/users/stylists/" + item.id
                    }
                  />
                ))}
              </React.Fragment>
            ) : (
              <div AlertMsg="No results found" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
