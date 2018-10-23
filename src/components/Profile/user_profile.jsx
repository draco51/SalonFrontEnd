import React, { Component } from "react";
import Header from "./../main/header";
import Footer from "./../main/footer";
import ProfileContent from "./profile-content";
class UserProfile extends Component {
  state = {
    item: [],
    skills: [],
    pictures: [],
    qualitifications: []
  };

  //Fetching freelancer profile data from API
  componentDidMount() {
    const encodedValue = encodeURIComponent(this.props.match.params.id);
    fetch(`${process.env.REACT_APP_API_URL}api/stylists/${encodedValue}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          item: json
        });
      });
  }

  //Rendering Data
  render() {
    console.log(this.state.item);
    const {
      id,
      name,
      profileTitle,
      description,
      location,
      propicURL,
      hourRate,
      rating,
      skills,
      qualitifications,
      pictures,
      calendar
    } = this.state.item;

    return (
      <div>
        <Header />
        <div className="jumbotron bg-white ">
          <div className="container">
            <ProfileContent
              key={id}
              userName={name}
              tagline={profileTitle}
              description={description}
              location={location}
              propicURL={propicURL}
              hourlyRate={hourRate}
              rating={rating}
              skillsObj={skills}
              qualifcnObj={qualitifications}
              images={pictures}
              calendar={calendar}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserProfile;
