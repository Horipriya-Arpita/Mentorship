// import React, { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import "./profileFlexbox.scss";

// export const ProfileFlexbox = () => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["profile_flexboxs"],
//     queryFn: () =>
//       makeRequest.get("/profile_flexboxs").then((res) => {
//         return res.data;
//       }),
//   });

//   console.log(data);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="profile-flexbox">
//       {/* <div className="flexbox-container">
//         <div className="profile-image">
//           <img src={profile_pic} alt="User profile image" />
//         </div>

//         <div className="profile-info">
//           <h2>{name}</h2>
//           {skills && skills.length > 0 && (
//             <div className="skills">
//               <h4>Skills</h4>
//               <ul>
//                 {skills.map((skill) => (
//                   <li key={skill}>
//                     {skill} 
//                     console.log("Skill:", skill);
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="buttons">
//             <button>Follow</button>
//             <a
//               href={`/profile/${userData.userId}`}
//               className="profile-detail-btn"
//             >
//               Profile Details
//             </a>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default ProfileFlexbox;

import "./profileFlexbox.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const ProfileFlexbox = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile_flexboxs"],
    queryFn: () =>
      makeRequest.get("/profile_flexboxs").then((res) => {
        return res.data;
      }),
  }, console.log(1));

  console.log("flexbox " + data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const userData = {};

  data.forEach((item) => {
    const userID = item.userID;
  
    if (!userData[userID]) {
      userData[userID] = []; // Initialize array for user ID
    }
  
    userData[userID].push(item.skillName); // Pushing skill data
  });
  

  Object.keys(userData).forEach((userID) => {
    const skillData = userData[userID];

    return (
      <div key={userID}>
        <h3>User ID: {userID}</h3>
        <p>Skills:</p>
        <ul>
          {skillData.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  });
};

export default ProfileFlexbox;
