import React, { Component } from "react";
import AdvResultBox from "./advResultBox/advResultBox";
import SearchFilters from "./searchFilters";
import { func } from "prop-types";

class advSearchBody extends Component {
  constructor(props) {
    super(props);
    this.filterByLocation = this.filterByLocation.bind(this);
    // this.filterByRating = this.filterByRating.bind(this);
    // this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }

  state = {
    items: [],
    filtereditems: [],
    locationOptions: [],
    ratingOptions: [],
    afterlocation: [],
  };

  //Returning Location list array for mapping
  getLocationList(item) {
    return { value: item.id, label: item.location, term: "location" };
  }
  getRatingList(item) {
    return { value: item.id, label: item.rating, term: "rating" };
  }

  //location Filtering
  filterByLocation(event) {
    // console.log("event data -> ", event.target.value);
    // console.log("profile  data -> ", this.state.items);
    var updatedItems = this.state.items;
    updatedItems = updatedItems.filter(function(item) {
      return (
        item.location
          .toString()
          .toLowerCase()
          .search(event.target.value.toString().toLowerCase()) !== -1
      );
    });
    this.setState({ afterlocation: updatedItems });
    console.log(this.state.afterlocation);
  }

  // filterByRating(filteredData, event) {
  //   return filteredData.filter(function(item) {
  //     return (
  //       item.rating
  //         .toString()
  //         .toLowerCase()
  //         .search(event.target.value.toString().toLowerCase()) !== -1
  //     );
  //   });
  // }

  handleFilterSubmit(event) {
    event.preventDefault();
    console.log(" filter options Submited");
    console.log(this.state.afterlocation);
  }

  //Loading freelancer profiles from API
  componentDidMount() {
    fetch("http://localhost:9008/search/Granvilletown/12/50")
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
        // console.log("rating options- ", this.state.ratingOptions);
      });
  }

  // HandleLocationChange = event => {
  //   console.log("Event data = > ", event);
  //   var updatedList = this.state.items;
  //   updatedList = updatedList.filter(function(item) {
  //     return (
  //       item.location
  //         .toString()
  //         .toLowerCase()
  //         .search(event.label.toString().toLowerCase()) !== -1
  //     );
  //   });
  //   console.log("Updated list : ", updatedList);
  //   this.setState({ filteredItems: updatedList });
  // };

  //Renderin
  render() {
    // console.log(this.state.locationOptions); //rendering data in console for testing

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 text-center">
            <SearchFilters
              handleChangeLocation={this.filterByLocation}
              handleChangeRating={this.filterByRating}
              handleSubmit={this.handleFilterSubmit}
              // locationOptions={this.state.locationOptions}
              // ratingOptions={this.state.ratingOptions}
              // handleChangeLocation={this.HandleLocationChange}
              // handleChangeRating={this.HandleLocationChange}
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
              <p>dsds</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
