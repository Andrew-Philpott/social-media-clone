import React from "react";
import ExperienceItem from "./ExperienceItem";
import { Avatar } from "@material-ui/core";

const masterExperienceList = [
  {
    id: 1,
    title: "Senior Fullstack Developer",
    position: "Microsoft",
    logo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.microsoft.com%2Fen-in%2Fhelp%2F148660%2Fhow-to-verify-windows-debug-symbols&psig=AOvVaw1Q6WDU9hmYPCgCzSu8BYL1&ust=1587508533590000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDLv6eI-OgCFQAAAAAdAAAAABAD",
    date: "September 2019 - Present * 8 months",
    location: "Seattle",
    duties: "Did this. Did that. Did everything.",
  },
  {
    id: 2,
    title: "Mid-level Fullstack Developer",
    position: "Facebook",
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png",
    date: "March 2017 - September 2019",
    location: "Seattle",
    duties: "Did this. Did that.",
  },
  {
    id: 3,
    title: "Junior Fullstack Developer",
    position: "Paladin",
    logo:
      "data:image/png;base64,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",
    date: "Sometime in the past",
    location: "Seattle",
    duties: "Did this.",
  },
];

function ExperienceSection(props) {
  return (
    <React.Fragment>
      <h2>Experience</h2>
      {masterExperienceList.map((exp, index) => (
        <div key={index}>
          <Avatar src={exp.logo} />
          <ExperienceItem
            title={exp.title}
            position={exp.position}
            date={exp.date}
            location={exp.location}
            duties={exp.duties}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default ExperienceSection;
