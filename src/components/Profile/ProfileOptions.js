import React from "react";
import { Button, Select, FormControl, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  floatRight: {
    float: "right",
  },
});
const moreDropDown = [
  "More",
  "Share profile via message",
  "Save to PDF",
  "Give kudos",
  "Request a recommendation",
  "Recommend",
  "Unfollow",
  "Remove connection",
  "Report/Block",
];
const educationList = [
  {
    logo:
      "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1880/s300/epicodus-ico.png",
    name: "Epicodus",
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Washington_seal.svg/1200px-University_of_Washington_seal.svg.png",
    name: "University of Undergrads",
  },
];

function ProfileOptions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {educationList.map((edu, index) => (
        <div key={index}>
          <Avatar src={edu.logo}></Avatar>
          <h4>{edu.name}</h4>
        </div>
      ))}
      <Button>Message</Button>
      <FormControl>
        <Select id="more-select" native="true">
          More
          {moreDropDown.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}

export default ProfileOptions;
