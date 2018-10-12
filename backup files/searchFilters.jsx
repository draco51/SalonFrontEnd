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

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <h6>Location : </h6>
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
        <hr />
        {/* wdwsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd */}
        <form onSubmit={this.props.handleSubmit}>
          <select
            class="form-control form-control-md"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option>Large select</option>
            <option>Large wdwdwect</option>
            <option>Large sedwdwdlect</option>
          </select>
        </form>
        {/* wdwsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd */}
      </div>
    );
  }
}
export default SearchFilters;
