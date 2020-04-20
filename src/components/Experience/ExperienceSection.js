import React from "react";
import ExperienceItem from "./ExperienceItem";

const masterExperienceList = [
  {
    title: "Senior Fullstack Developer",
    position: "Microsoft",
    date: "September 2019 - Present * 8 months",
    location: "Seattle",
    duties: "Did this. Did that. Did everything.",
  },
  {
    title: "Mid-level Fullstack Developer",
    position: "Facebook",
    date: "March 2017 - September 2019",
    location: "Seattle",
    duties: "Did this. Did that.",
  },
  {
    title: "Junior Fullstack Developer",
    position: "Intern at startup",
    date: "Sometime in the past",
    location: "Seattle",
    duties: "Did this.",
  },
];

function ExperienceSection(props) {
  return (
    <React.Fragment>
      {masterExperienceList.map((exp, index) => (
        <ExperienceItem
          title={exp.title}
          position={exp.position}
          date={exp.date}
          location={exp.location}
          duties={exp.duties}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default ExperienceSection;
