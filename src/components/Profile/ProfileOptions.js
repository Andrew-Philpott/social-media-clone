import React from "react";

const moreDropDown = [
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
      <button>Message</button>
      <select>
        {moreDropDown.map((option, index) => (
          <option key={option}>{option}</option>
        ))}
      </select>
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
