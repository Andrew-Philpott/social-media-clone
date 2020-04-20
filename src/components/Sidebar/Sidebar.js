import React from "react";
import SideBarConnection from "./SidebarConnection";

const people = [
  {
    name: "Andrew Hasfen",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
    headline: "Doing awesome things",
  },
  {
    name: "Sally Someone",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    headline: "UI design is my life",
  },
  {
    name: "Sergio Vladik",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    headline: "Living life to the fullest",
  },
];

function SideBar() {
  return (
    <React.Fragment>
      <h2>People also viewed</h2>
      {people.map((person, index) => {
        return SideBarConnection(person);
      })}
    </React.Fragment>
  );
}

export default SideBar;
