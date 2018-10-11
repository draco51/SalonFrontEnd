import React, { Component } from "react";
import Header from "./../main/header";
import Footer from "./../main/footer";
import ProfileContent from "./profile-content";

class UserProfile extends Component {
  state = {
    item: [],
    skills: [],
    pictures: []
  };

  //Fetching freelancer profile data from API
  componentDidMount() {
    const encodedValue = encodeURIComponent(this.props.match.params.id);
    fetch(`http://127.0.0.1:9008/api/stylists/${encodedValue}`)
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
      pictures
    } = this.state.item;

    return (
      <div>
        <Header />
        <div className="jumbotron bg-white ">
          <div className="container" style={{ height: 1200 }}>
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
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserProfile;
