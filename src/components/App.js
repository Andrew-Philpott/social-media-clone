import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  InputBase,
} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExperienceSection from "./Experience/ExperienceSection";
import Profile from "./Profile/Profile";
import SideBar from "./Sidebar/Sidebar";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#283E4A",
  },
  borderBlue: {
    borderColor: "blue",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    // flexGrow: 1,
  },
  mainContent: {
    marginTop: "80px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Paper className={classes.paper}>
          <AppBar className={classes.navbar} position="fixed">
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    LinkedIn
                  </Typography>
                  <div className={classes.search}>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Toolbar>
              </Grid>
              <Grid item xs={5}>
                <Toolbar>
                  <Grid item xs={2}>
                    <HomeOutlinedIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <PeopleOutlineIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <WorkOutlineIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <ForumOutlinedIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <NotificationsOutlinedIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <Button color="inherit">Login</Button>
                  </Grid>
                </Toolbar>
              </Grid>
            </Grid>
          </AppBar>
        </Paper>
      </Container>
      ;
      <Container>
        <Grid container spacing={3} className={classes.mainContent}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Profile></Profile>
              <About />
              <ExperienceSection />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <SideBar></SideBar>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
