import React, { Component } from "react";
import AdvResultBox from "./advResultBox";
import SearchFilters from "./searchFilters";

class advSearchBody extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    fetch("http://127.0.0.1:9008/api/stylists/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 text-center">
            <SearchFilters />
          </div>
          <div className="col-md-10">
            {this.state.items ? (
              <React.Fragment>
                {this.state.items.map(item => (
                  <AdvResultBox
                    key={item.id}
                    userName={item.name}
                    Tagline={item.profileTitle}
                    description={item.description}
                    location={item.location}
                    propicURL={item.propicURL}
                    profileURL={
                      "http://localhost:3000/users/stylists/" + item.id
                    }
                  />
                ))}
              </React.Fragment>
            ) : (
              <div AlertMsg="No results found" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default advSearchBody;
