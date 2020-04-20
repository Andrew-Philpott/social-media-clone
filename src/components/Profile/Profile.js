import React from "react";
import { makeStyles, Paper, Avatar } from "@material-ui/core";
import ProfileInfo from "./ProfileInfo";
import ProfileOptions from "./ProfileOptions";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
  avatar: {
    width: 150,
    height: 150,
  },
  media: {
    height: 200,
  },
  border: {
    borderTopColor: "green",
  },
  title: {
    flexGrow: 1,
  },
}));
const Profile = (profileInfo) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1501771924607-209f42a6e7e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Avatar
                className={classes.avatar}
                src="https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
              ></Avatar>
              <ProfileInfo />
            </Grid>
            <Grid item xs={6}>
              <ProfileOptions />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};
export default Profile;
