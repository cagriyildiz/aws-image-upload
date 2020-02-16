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
    const username = userProfile.username;
    const userProfileId = userProfile.userProfileId;
    return (
      <div key={index}>
        {userProfileId ?
          <img src={`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/download`} alt={'profile'}/> : null}
        <h1>{username}</h1>
        <p>{userProfileId}</p>
        <Dropzone {...userProfile} />
      </div>
    );
  });
};

export default UserProfile;