import React, { Component } from "react";
import AdvResultBox from "./advResultBox/advResultBox";
import SearchFilters from "./searchFilters";
import { func } from "prop-types";
import MaterialIcon, { colorPalette } from "material-icons-react";
import SortingTab from "./sortingTab";

class advSearchBody extends Component {
  constructor(props) {
    super(props);
    this.filterByLocation = this.filterByLocation.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
    this.getSearchData = this.getSearchData.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.setMinPrice = this.setMinPrice.bind(this);
    this.isRatingSorted = true;
    this.isPriceSorted = true;
  }

  state = {
    isLoaded: false,
    items: [],
    filtereditems: [],
    locationTerm: "",
    ratingTerm: "1",
    priceTerm: "5",
    isRatingSorted: true,
    isPriceSorted: true,
    minPrice: 0,
    maxPrice: 0
  };

  //location Filtering
  filterByLocation(event) {
    // console.log("event value", event.target.value.toString().toLowerCase());
    this.setState({ locationTerm: event.target.value });
    console.log(this.state.locationTerm);
  }
  filterByRating(event) {
    // console.log("event value", event.target.value.toString().toLowerCase());
    this.setState({ ratingTerm: event.target.value });
    console.log(this.state.ratingTerm);
  }

  //getting initial result for listing
  componentDidMount() {
    fetch("http://127.0.0.1:9008/api/stylists")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          filteredItems: json
        });
      });
  }

  //Rating Sorting function
  sortByRating(event) {
    if (this.state.filteredItems) {
      if (this.state.isRatingSorted) {
        console.log("called");
        var sortedItems = this.state.filteredItems.sort(
          (a, b) => a.rating < b.rating
        );
        this.setState({
          filtereditems: sortedItems,
          isRatingSorted: !this.state.isRatingSorted
        });
      } else {
        console.log("not called");
        var sortedItems = this.state.filteredItems.sort(
          (a, b) => a.rating > b.rating
        );
        this.setState({
          filtereditems: sortedItems,
          isRatingSorted: !this.state.isRatingSorted
        });
      }
    } else {
      alert("Please wait data is loading");
    }
  }
  //Price Sorting function
  sortByPrice(event) {
    if (this.state.filteredItems) {
      if (this.state.isPriceSorted) {
        console.log("called");
        var sortedItems = this.state.filteredItems.sort(
          (a, b) => a.hourRate < b.hourRate
        );
        this.setState({
          filtereditems: sortedItems,
          isPriceSorted: !this.state.isPriceSorted
        });
      } else {
        console.log("not called");
        var sortedItems = this.state.filteredItems.sort(
          (a, b) => a.hourRate > b.hourRate
        );
        this.setState({
          filtereditems: sortedItems,
          isPriceSorted: !this.state.isPriceSorted
        });
      }
    } else {
      alert("Please wait data is loading");
    }
  }

  //Getting min and max prices
  setMinPrice = event => {
    console.log("called", event);
    var min = this.event.target.value;
    this.setState({ minPrice: min });
    console.log(this.state.minPrice);
  };
  setMaxPrice(e) {
    this.setState({ maxPrice: this.e.target.value });
  }

  //Fetch request to get search result from API
  getSearchData(event) {
    this.setState({ isLoaded: false });
    event.preventDefault();
    const location = encodeURIComponent(this.state.locationTerm);
    const rating = encodeURIComponent(this.state.ratingTerm);
    const rate = encodeURIComponent(this.state.priceTerm);
    fetch(`http://localhost:9008/search/${location}/${rating}/${rate}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          filteredItems: json
        });
      });
    console.log(this.state.filteredItems);
  }

  //Renderin
  render() {
    // console.log(this.state.locationOptions); //rendering data in console for testing
    const ratingButtonText = this.state.isRatingSorted
      ? "High rated First"
      : "Low rated First";
    const priceButtonText = this.state.isPriceSorted
      ? "High price First"
      : "Low price First";
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 text-center">
            <SearchFilters
              handleChangeLocation={this.filterByLocation}
              handleChangeRating={this.filterByRating}
              handleSubmit={this.getSearchData}
              setMinPrice={this.setMinPrice}
              setMaxPrice={this.setMaxPrice}
            />
          </div>
          <div className="col-sm-9">
            <div className="container text-right">
              <SortingTab
                sortByRating={this.sortByRating}
                sortByPrice={this.sortByPrice}
                ratingButtonText={ratingButtonText}
                priceButtonText={priceButtonText}
              />
              <br />
            </div>
            {this.state.isLoaded ? (
              <React.Fragment>
                {this.state.filteredItems.map(item => (
                  <AdvResultBox
                    key={item.id}
                    userName={item.name}
                    tagline={item.profileTitle}
                    description={item.description}
                    location={item.location}
                    propicURL={item.propicURL}
                    price={item.hourRate}
                    rating={item.rating}
                    profileURL={
                      "http://localhost:3000/users/stylists/" + item.id
                    }
                  />
                ))}
              </React.Fragment>
            ) : (
              <p> Loding results..</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
