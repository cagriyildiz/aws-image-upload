import React, { useEffect, useState } from "react";

import axios from "axios";
import Dropzone from "./Dropzone";

const UserProfile = () => {

  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/api/v1/user-profile')
      .then(res => {
        setUserProfiles(res.data);
      });
  };

  useEffect(fetchUserProfiles, []);

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        <h1>{userProfile.username}</h1>
        <p>{userProfile.userProfileId}</p>
        <Dropzone {...userProfile} />
      </div>
    );
  });
};

export default UserProfile;