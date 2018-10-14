import React, { Component } from "react";

class SortingTab extends Component {
  state = {};
  render() {
    return (
      <div>
        Sort :{"  "}
        <button
          className="btn btn-outline-primary"
          onClick={this.props.sortByRating}
        >
          {this.props.ratingButtonText}
        </button>
        {"    "}
        <button
          className="btn btn-outline-primary"
          onClick={this.props.sortByPrice}
        >
          {this.props.priceButtonText}
        </button>
      </div>
    );
  }
}

export default SortingTab;
