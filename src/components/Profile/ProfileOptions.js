import React from "react";
import { Button, Select, InputLabel, FormControl } from "@material-ui/core";

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
    logo: "logo1.jpg",
    name: "Epicodus",
  },
  {
    logo: "logo2.jpg",
    name: "University of Undergrads",
  },
];

function ProfileOptions() {
  return (
    <React.Fragment>
      <Button>Message</Button>
      <FormControl>
        <Select id="more-select" native="true">
          More
          {moreDropDown.map((option, index) => (
            <option>{option}</option>
          ))}
        </Select>
      </FormControl>
      {educationList.map((edu, index) => (
        <div>
          <h2>{edu.logo}</h2>
          <h2>{edu.name}</h2>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ProfileOptions;
