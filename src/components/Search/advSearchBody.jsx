import React, { Component } from "react";
import AdvResultBox from "./advResultBox/advResultBox";
import SearchFilters from "./searchFilters";
import { func } from "prop-types";
import MaterialIcon, { colorPalette } from "material-icons-react";
import SortingTab from "./sortingTab";

class advSearchBody extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoaded: false,
    errMsg: "",
    items: [],
    filtereditems: [],
    locationTerm: "",
    ratingTerm: "1",
    priceTerm: "5",
    isRatingSorted: true,
    isPriceSorted: true,
    minPrice: 0,
    maxPrice: 1000,
    skills: [],
    warning: "Loding results.."
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
  componentWillMount() {
    fetch(`${process.env.REACT_APP_API_URL}api/stylists`)
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
  setMinPrice(event) {
    console.log("called");
    var min = event.target.value;
    this.setState({ minPrice: min });
    console.log(this.state.minPrice);
  }

  setMaxPrice(event) {
    console.log("called");
    var max = event.target.value;
    this.setState({ maxPrice: max });
    console.log(this.state.maxPrice);
  }

  //Getting selected skills

  handleChangeSkills = (newValue: any, actionMeta: any) => {
    console.log("Value Changed", newValue);
    var selectedSkills = newValue;
    this.setState({ skills: selectedSkills });
  };

  //Fetch request to get search result from API
  getSearchData(event) {
    this.setState({ isLoaded: false });
    event.preventDefault();
    const location = encodeURIComponent(this.state.locationTerm);
    const rating = encodeURIComponent(this.state.ratingTerm);
    const minPrice = encodeURIComponent(this.state.minPrice);
    const maxPrice = encodeURIComponent(this.state.maxPrice);
    var esc = encodeURIComponent;
    var skillArray = this.state.skills.map(item => {
      return [item.label];
    });
    const skill1 = esc(skillArray[0]);
    const skill2 = esc(skillArray[1]);
    const skill3 = esc(skillArray[2]);
    const skill4 = esc(skillArray[3]);
    const skill5 = esc(skillArray[4]);

    fetch(
      `${
        process.env.REACT_APP_API_URL
      }search?location=${location}&rating=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}&s[]=${skill1}&s[]=${skill2}&s[]=${skill3}&s[]=${skill4}&s[]=${skill5}`
    )
      .then(res => {
        if (res.ok) {
          res.json().then(json => {
            this.setState({
              isLoaded: true,
              filteredItems: json
            });
          });
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch(error => {
        alert(error);
        this.setState({ warning: "No results found" });
      });
    console.log("fetched item from DB", this.state.filteredItems);
  }

  //Renderin
  render() {
    // console.log(this.state.locationOptions); //rendering data in console for testing
    const ratingButtonText = this.state.isRatingSorted
      ? "Low rated First"
      : "High rated First";
    const priceButtonText = this.state.isPriceSorted
      ? "Low price First"
      : "High price First";
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 text-center">
            <SearchFilters
              handleChangeLocation={this.filterByLocation.bind(this)}
              handleChangeRating={this.filterByRating.bind(this)}
              handleSubmit={this.getSearchData.bind(this)}
              setMinPrice={this.setMinPrice.bind(this)}
              setMaxPrice={this.setMaxPrice.bind(this)}
              handleChangeSkills={this.handleChangeSkills.bind(this)}
            />
          </div>
          <div className="col-sm-9">
            <div className="container text-right">
              <SortingTab
                sortByRating={this.sortByRating.bind(this)}
                sortByPrice={this.sortByPrice.bind(this)}
                ratingButtonText={ratingButtonText}
                priceButtonText={priceButtonText}
              />
              <br />
            </div>
            {this.state.isLoaded ? (
              <React.Fragment>
                {this.state.filteredItems.length > 0 ? (
                  <div>
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
                          process.env.REACT_APP_BASE_URL +
                          "users/stylists/" +
                          item.id
                        }
                      />
                    ))}
                  </div>
                ) : (
                  "No results"
                )}
              </React.Fragment>
            ) : (
              <p> {this.state.warning}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
