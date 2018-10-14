import React, { Component } from "react";
import CreatableSelect from "react-select/lib/Creatable";

class SearchFilters extends Component<*, State> {
  constructor(props) {
    super(props);
  }
  state = {
    selectedOption: null,
    locationOptions: [],
    items: []
  };

  componentDidMount() {
    fetch("http://127.0.0.1:9008/api/stylists")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
    var locationOptions = this.state.items.map(item => {
      return { value: item.id, label: item.location };
    });
    this.setState({ locationOptions });
    console.log("list lcoations", this.state.locationOptions);
  }

  render() {
    // const { selectedOption } = this.state;
    return (
      <div>
        <label>
          <h6>Sort Results</h6>
        </label>
        {/* ========User Rating Sorting Button=========== */}
        <div>
          <button
            className="btn btn-outline-primary"
            onClick={this.props.sortByRating}
          >
            {this.props.ratingButtonText}
          </button>
        </div>
        <br />
        {/* ========User Price Sorting Button=========== */}
        <div>
          <button
            className="btn btn-outline-primary"
            onClick={this.props.sortByPrice}
          >
            {this.props.priceButtonText}
          </button>
        </div>
        <br />
        <hr />
        {/* Location Selection */}
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
          {/* Rating Selection */}
          <h6>Rating : </h6>
          <select
            className="form-control form-control-md"
            value={this.props.value}
            onChange={this.props.handleChangeRating}
          >
            <option value="3">Above Standard</option>
            <option value="5">Top rated</option>
          </select>
          <br />
          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
        {/* //end */}
      </div>
    );
  }
}
export default SearchFilters;
