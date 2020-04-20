import React from "react";
import PropTypes from "prop-types";

function ExperienceItem(props) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h4>{props.position}</h4>
      <h4>{props.date}</h4>
      <h4>{props.location}</h4>
      <h5>{props.duties}</h5>
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
