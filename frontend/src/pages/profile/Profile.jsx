/*import "./profile.scss";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import Update from "../../components/update/Update";
// import { useState } from "react";

export const Profile = () => {
//   const [openUpdate, setOpenUpdate] = useState(false);
//   const { currentUser } = useContext(AuthContext);

//   const userId = parseInt(useLocation().pathname.split("/")[2]);

//   const { isLoading, error, data } = useQuery(["user"], () =>
//     makeRequest.get("/users/find/" + userId).then((res) => {
//       return res.data;
//     })
//   );

//   const { isLoading: rIsLoading, data: relationshipData } = useQuery(
//     ["relationship"],
//     () =>
//       makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
//         return res.data;
//       })
//   );

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (following) => {
//       if (following)
//         return makeRequest.delete("/relationships?userId=" + userId);
//       return makeRequest.post("/relationships", { userId });
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["relationship"]);
//       },
//     }
//   );

//   const handleFollow = () => {
//     mutation.mutate(relationshipData.includes(currentUser.id));
//   };

  return (
    <div className="profile">
        <h1>Profile</h1>
      {/* {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/"+data.coverPic} alt="" className="cover" />
            <img src={"/upload/"+data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />} }
    </div>
  );
};

export default Profile;
*/

import React, { useState } from "react";
import './profile.scss';
import BasicInfoForm from "../../components/profileForm/BasicInfoForm";
import ExperienceForm from "../../components/profileForm/ExperienceForm";
import SocialForm from "../../components/profileForm/SocialForm";
//import Coverimg from "../images/coverphoto.jpg"
//import Profileimg from "../images/profile.jpeg"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

  
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="images">
          <img className="cover" src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="cover" />
          <img className="profilepic" src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profilepic" />
        </div>
        <div className="profile-name">
          <h1>{currentUser.name}</h1>
        </div>
        <button className="edit-profile" onClick={handleClick}>
          Edit Profile
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <div className="form-overlay" onClick={handleClose}></div>
          <div className="form-box">
            <div className="tabs">
              <button
                className={activeTab === 'basic' ? 'active' : ''}
                onClick={() => handleTabChange('basic')}
              >
                Basic Info
              </button>
              <button
                className={activeTab === 'experience' ? 'active' : ''}
                onClick={() => handleTabChange('experience')}
              >
                Experience
              </button>
              <button
                className={activeTab === 'social' ? 'active' : ''}
                onClick={() => handleTabChange('social')}
              >
                Social Links
              </button>
            </div>

            {/* Render different form content based on the active tab */}
            {activeTab === 'basic' && <BasicInfoForm />}

            {activeTab === 'experience' && <ExperienceForm />}

            {activeTab === 'social' && <SocialForm />}
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="detail-container">
        <div className="Bio">
          <h2>Bio</h2>
          <p>This is Arpitaa, I love to sleep... hehe hehe hehe</p>
        </div>
        <div className="Skill-set"></div>
      </div>
    </div>
  );
}

export default Profile;
