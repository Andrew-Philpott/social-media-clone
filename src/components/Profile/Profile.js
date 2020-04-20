import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileOptions from "./ProfileOptions";

function Profile(profileInfo) {
  return (
    <React.Fragment>
      <ProfileInfo />
      <ProfileOptions />
    </React.Fragment>
  );
}

export default Profile;
