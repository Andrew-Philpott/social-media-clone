import React from "react";
import PropTypes from "prop-types";

function ExperienceItem(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <h2>{props.position}</h2>
      <h2>{props.date}</h2>
      <h2>{props.location}</h2>
      <h3>{props.duties}</h3>
    </React.Fragment>
  );
}

ExperienceItem.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  duties: PropTypes.string,
};

export default ExperienceItem;
