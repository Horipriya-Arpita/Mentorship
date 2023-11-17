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
