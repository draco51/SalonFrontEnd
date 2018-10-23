import React, { Component } from "react";
import AdBox from "./../AdBox/AdBox";
import PrimarySearch from "../Search/primarySearch/primarySearch";
import Feedback from "./feedback/feedback";
import loadingGIF from "./../../img/loading.gif";

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      filteredItems: [],
      proURL: "",
      alertMsg: "",
      updatedList: []
    };
  }

  //Search term input filtering
  HandleChange = event => {
    this.setState({ filteredItems: [], isLoading: true });
    console.log(event.target.value);
    const searchTerm = encodeURIComponent(event.target.value.toString());
    fetch(
      `${process.env.REACT_APP_API_URL}search_primary?searchTerm=${searchTerm}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          filteredItems: json,
          alertMsg: "No results found"
        });
      });
    console.log(this.state.updatedList);
  };

  //Rendering component
  render() {
    return (
      <div>
        <br />
        <div className="conainer text-center">
          Find your perfect hair stylist and book them now.
        </div>
        <PrimarySearch HandleChange={this.HandleChange} id="primarySearchbox" />
        {this.state.isLoading ? (
          <div class="text-center">
            <img
              src={loadingGIF}
              style={{
                maxWidth: "70%",
                height: "auto"
              }}
            />
          </div>
        ) : (
          ""
        )}
        {this.state.filteredItems.length > 0 ? (
          <div>
            {this.state.filteredItems.map(item => (
              <AdBox
                key={item.id}
                userName={item.name}
                Tagline={item.profileTitle}
                description={item.description}
                location={item.location}
                propicURL={item.propicURL}
                profileURL={
                  process.env.REACT_APP_BASE_URL + "users/stylists/" + item.id
                }
              />
            ))}
          </div>
        ) : (
          <div className="alert alert-dark-sm text-center" role="alert">
            {this.state.alertMsg}
          </div>
        )}
        {this.state.filteredItems.length ? (
          <p />
        ) : (
          <div className="container">
            {" "}
            <Feedback />
          </div>
        )}
      </div>
    );
  }
}

export default HomeBody;

//----------------------Instant filter from item list-----------------------------------------------------------------------------------//
// //Search term input filtering
// HandleChange = event => {
//   console.log(event);
//   var updatedList = this.state.items;
//   updatedList = updatedList.filter(function(item) {
//     return (
//       item.name
//         .toString()
//         .toLowerCase()
//         .search(event.target.value.toString().toLowerCase()) !== -1 ||
//       item.location
//         .toString()
//         .toLowerCase()
//         .search(event.target.value.toString().toLowerCase()) !== -1 ||
//       item.profileTitle
//         .toString()
//         .toLowerCase()
//         .search(event.target.value.toString().toLowerCase()) !== -1
//     );
//   });
//   this.setState({ filteredItems: updatedList, alertMsg: "No results found" });
// };

// //Fetching freelancer profiles from API
// componentDidMount() {
//   fetch(`${process.env.REACT_APP_API_URL}api/stylists`)
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         isLoaded: true,
//         items: json
//       });
//     });
// }
//---------------------------------------------------------------------------------------------------------//
