import React from "react";
import PropTypes from "prop-types";

const profileInfo = {
  name: "Tiffany",
  connectionDegree: "1st",
  headline:
    "Coding Student at Epicodus | Junior Web Developer | Java and JavaScript | C#/.NET",
  location: "Lynnwood, Washington",
  connectionAmount: "28 connections",
  contactInfo: "Contact Info",
};

function ProfileInfo(props) {
  return (
    <React.Fragment>
      <h1>{profileInfo.name}</h1>
      <h2>{profileInfo.connectionDegree}</h2>
      <h2>{profileInfo.headline}</h2>
      <h2>{profileInfo.location}</h2>
      <h3>{profileInfo.connectionAmount}</h3>
      <h3>{profileInfo.contactInfo}</h3>
    </React.Fragment>
  );
}

ProfileInfo.propTypes = {
  name: PropTypes.string,
  connectionDegree: PropTypes.string,
  headline: PropTypes.string,
  location: PropTypes.string,
  connectionAmount: PropTypes.string,
  contactInfo: PropTypes.string,
};

export default ProfileInfo;
