import React, { Component } from "react";
import CreatableSelect from "react-select/lib/Creatable";
import Select from "react-select";

class SearchFilters extends Component<*, State> {
  constructor(props) {
    super(props);
  }
  state = {
    selectedOption: null,
    locationOptions: [],
    items: [],
    minPrice: 0,
    maxPrice: 0,
    skillOptions: [
      { value: "s1", label: "Hair Bleaching" },
      { value: "s2", label: "Hair Coloring" },
      { value: "s3", label: "Hair Conditioning" },
      { value: "s4", label: "Hair Extensions" },
      { value: "s5", label: "Hair Shaping" }
    ]
  };

  // handleChange = (newValue: any, actionMeta: any) => {
  //   console.group("Value Changed");
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };

  componentWillMount() {
    fetch("http://127.0.0.1:9008/api/stylists")
      .then(res => res.json())
      .then(json => {
        this.setState({ items: json });
        var locationOptions = json
          .map(item => {
            return { id: item.id, location: item.location };
          })
          .filter(value => {
            return !this[value.location] && (this[value.location] = true);
          }, Object.create(null));
        this.setState({ locationOptions });
        console.log("Location options list", this.state.locationOptions);
      });
  }

  // loadLocations() {
  //   console.log("item list", this.state.items);
  //   var locationOptions = this.state.items.map(item => {
  //     return [item.location];
  //   });
  //   this.setState({ locationOptions });
  //   console.log("list lcoations", this.state.locationOptions);
  // }

  render() {
    return (
      <div>
        <label>
          <h6>Filter results</h6>
        </label>
        <hr />
        {/*------------------Location Selection ------------------*/}
        <h6>Location : </h6>
        <form onSubmit={this.props.handleSubmit}>
          <select
            className="form-control form-control-md"
            value={this.props.value}
            onChange={this.props.handleChangeLocation}
          >
            {this.state.locationOptions.map(item => (
              <option key={item.id} value={item.location}>
                {" "}
                {item.location}{" "}
              </option>
            ))}
          </select>
          <br />
          {/*------------------Rating Selection------------------ */}
          <h6>Rating : </h6>
          <select
            className="form-control form-control-md"
            value={this.props.value}
            onChange={this.props.handleChangeRating}
          >
            <option value="2">Above Standard</option>
            <option value="5">Top rated</option>
          </select>
          <br />
          {/*------------------Price range Selection------------------ */}
          <h6>Price range : </h6>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              type="number"
              min="10"
              step="5"
              className="form-control"
              placeholder="Min"
              name="minPrice"
              onChange={this.props.setMinPrice}
            />
            <div className="input-group-prepend">
              {" - "}
              <div className="input-group-text">$</div>
            </div>
            <input
              type="number"
              min="10"
              step="5"
              className="form-control"
              placeholder="Max"
              name="maxPrice"
              onChange={this.props.setMaxPrice}
            />
          </div>
          <br />
          {/*------------------Skills Selection------------------ */}
          <h6>Skills : </h6>
          <CreatableSelect
            isMulti
            onChange={this.props.handleChangeSkills}
            options={this.state.skillOptions}
          />
          <br />
          {/* ----------------------END----------------------------- */}
          <input className="btn btn-primary" type="submit" value="Search" />
          <br />
        </form>
        {/* //end */}
      </div>
    );
  }
}
export default SearchFilters;
