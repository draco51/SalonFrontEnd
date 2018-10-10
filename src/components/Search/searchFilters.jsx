import React, { Component } from "react";
import Select, { components } from "react-select";
import CreatableSelect from "react-select/lib/Creatable";
// import { colourOptions } from "../data";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class SearchFilters extends Component<*, State> {
  state = {
    selectedOption: null
  };

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        // options={colourOptions}
      />
    );
  }
}
export default SearchFilters;
