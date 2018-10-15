import React, { Component } from "react";
import CreatableSelect from "react-select/lib/Creatable";

class SearchFilters extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedOption: null,
    locationOptions: [],
    items: [],
    minPrice: 0,
    maxPrice: 0
  };

  componentWillMount() {
    fetch("http://127.0.0.1:9008/api/stylists")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
    console.log("item list", this.state.items);
    var locationOptions = this.state.items.map(item => {
      return { value: item.id, label: item.location };
    });
    this.setState({ locationOptions: locationOptions });
    console.log("list lcoations", this.state.locationOptions);
  }

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
            {this.state.items.map(item => (
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
