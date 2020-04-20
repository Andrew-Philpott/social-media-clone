import React from "react";
import PropTypes from "prop-types";

const profileInfo = {
  name: "Stu Dent",
  connectionDegree: "1st",
  headline:
    "Coding Student at Epicodus | Junior Web Developer | Java and JavaScript | C#/.NET",
  location: "Washington",
  connectionAmount: "42 connections",
  contactInfo: "Contact Info",
};

function ProfileInfo(props) {
  return (
    <React.Fragment>
      <h2>
        {profileInfo.name}&nbsp;
        {profileInfo.connectionDegree}
      </h2>
      <h4>{profileInfo.headline}</h4>
      <h4>{profileInfo.location}</h4>
      <h4>
        {profileInfo.connectionAmount}&nbsp;
        {profileInfo.contactInfo}
      </h4>
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
