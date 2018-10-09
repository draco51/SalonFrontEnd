import React, { Component } from "react";
import "./primarySearch.css";

class PrimarySearch extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <br />
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <form action="http://127.0.0.1:9008/api/stylists" method="POST">
              <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                  <i class="fas fa-search h4 text-body" />
                </div>
                <div class="col">
                  <input
                    class="form-control form-control-lg form-control-borderless"
                    type="search"
                    name="name"
                    placeholder="Search topics or keywords"
                  />
                </div>
                {"   "}
                <div class="col-auto">
                  <button class="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PrimarySearch;
