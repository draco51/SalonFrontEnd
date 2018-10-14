import React, { Component } from "react";
import CreatableSelect from "react-select/lib/Creatable";

class SearchFilters extends Component<*, State> {
  constructor(props) {
    super(props);
  }
  state = {
    selectedOption: null,
    locationOptions: [],
    ratingOptions: [
      { value: "1", label: "1", term: "rating" },
      { value: "2", label: "2", term: "rating" },
      { value: "3", label: "3", term: "rating" },
      { value: "4", label: "4", term: "rating" },
      { value: "5", label: "5", term: "rating" }
    ]
  };

  //Getting Selection lists from parent advSearchBody
  static getDerivedStateFromProps(nextProps) {
    return {
      locationOptions: nextProps.locationOptions
        ? nextProps.locationOptions
        : []
      //   ,
      // ratingOptions: nextProps.ratingOptions ? nextProps.ratingOptions : []
    };
  }

  // handleChange = (newValue: any, actionMeta: any) => {
  //   console.group("Value Changed");
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };

  render() {
    // const { selectedOption } = this.state;
    return (
      <div>
        {/* <h6>Location : </h6>
        <CreatableSelect
          onChange={this.props.handleChangeLocation}
          options={this.state.locationOptions}
        />
        <hr />
        <h6>Ratings : </h6>
        <CreatableSelect
          onChange={this.props.handleChangeRating}
          options={this.state.ratingOptions}
        />
        <hr /> */}
        {/* wdwsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd */}
        Location
        <form onSubmit={this.props.handleSubmit}>
          <select
            className="form-control form-control-md"
            value={this.state.value}
            onChange={this.props.handleChangeLocation}
          >
            <option value="Port Gaetano">Port Gaetano</option>
            <option value="Granvilletown">Granvilletown</option>
            <option value="East Chauncey">East Chauncey</option>
          </select>
          Rating
          <select
            className="form-control form-control-md"
            value={this.state.value}
            onChange={this.props.handleChangeRating}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        {/* wdwsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd */}
      </div>
    );
  }
}
export default SearchFilters;
