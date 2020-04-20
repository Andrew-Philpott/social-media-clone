import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

function SideBarConnection(props) {
  return (
    <React.Fragment key={props.name}>
      <h1>{props.name}</h1>
      <h2>{props.headline}</h2>
      <Avatar key={props.name} alt={props.name} src={props.image} />
    </React.Fragment>
  );
}

SideBarConnection.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  headline: PropTypes.string,
};
export default SideBarConnection;
