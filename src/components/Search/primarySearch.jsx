import React, { Component } from "react";
import "./primarySearch.css";

class PrimarySearch extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form onSubmit={this.props.getUser}>
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body" />
                </div>
                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="text"
                    name="userName"
                    placeholder="Search names, topics or keywords"
                    onChange={this.props.HandleChange}
                  />
                </div>
                {"   "}
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <p>{this.props.AlertMsg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PrimarySearch;
