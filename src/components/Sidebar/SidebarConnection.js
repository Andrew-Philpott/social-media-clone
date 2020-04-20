import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function SideBarConnection(props) {
  return (
    <React.Fragment key={props.name}>
      <Grid item xs={2}>
        <Avatar key={props.name} alt={props.name} src={props.image} />
      </Grid>
      <Grid item xs={10}>
        <h2>{props.name}</h2>
      </Grid>
      <h4>{props.headline}</h4>
    </React.Fragment>
  );
}

SideBarConnection.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  headline: PropTypes.string,
};
export default SideBarConnection;
