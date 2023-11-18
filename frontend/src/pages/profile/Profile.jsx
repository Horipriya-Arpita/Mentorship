import React, { useState } from "react";
import "./profile.scss";
import BasicInfoForm from "../../components/profileForm/BasicInfoForm";
import ExperienceForm from "../../components/profileForm/ExperienceForm";
import SocialForm from "../../components/profileForm/SocialForm";
//import Coverimg from "../images/coverphoto.jpg"
//import Profileimg from "../images/profile.jpeg"
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { WorkData } from "../../components/workData/WorkData";
import { EducationData } from "../../components/educationData/EducationData";
import { SkillSet } from "../../components/skillSet/SkillSet";
import UserDetails from "../../components/user_details/UserDetails";
import myLocalImage0 from "../../assets/1000.jpg";
import myLocalImage1 from "../../assets/1001.jpg";

const ProjectCard = ({ title, repoLink }) => {
  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-box">
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export const Profile = () => {
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  console.log("ammo" + userId);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
      }),
  });

  // Check if data is still loading
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching user data:", error);
  } else {
    // Data is available here
    console.log("Fetched user data:", data);
  }

  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

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
          <img
            className="cover"
            src={myLocalImage0}
            alt="cover"
          />
          <img
            className="profilepic"
            src={myLocalImage1}
            alt="profilepic"
          />
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
                className={activeTab === "basic" ? "active" : ""}
                onClick={() => handleTabChange("basic")}
              >
                Basic Info
              </button>
              <button
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => handleTabChange("experience")}
              >
                Experience
              </button>
              <button
                className={activeTab === "social" ? "active" : ""}
                onClick={() => handleTabChange("social")}
              >
                Social Links
              </button>
            </div>

            {/* Render different form content based on the active tab */}
            {activeTab === "basic" && <BasicInfoForm />}

            {activeTab === "experience" && <ExperienceForm />}

            {activeTab === "social" && <SocialForm userId={userId} />}
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="detail-container">

        <UserDetails />
        <SkillSet />
        <EducationData />
        <WorkData />

        <div className="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            <ProjectCard
              title="Portfolio Website"
              repoLink="https://github.com/Horipriya-Arpita/Portfolio-website"
            />
            <ProjectCard
              title="SWE 250 Project"
              repoLink="https://github.com/Horipriya-Arpita/SWE-project-250"
            />
            <ProjectCard
              title="To-Do List"
              repoLink="https://github.com/mugdha-samiul/To-Do-list"
            />
            <ProjectCard
              title="CP Practice"
              repoLink="https://github.com/mugdha-samiul/Online-Judge-Problem-Discussion"
            />
            <ProjectCard
              title="Connect SWE"
              repoLink="https://github.com/Rifat-Shariar-Sakil-24/connectSWE"
            />
            <ProjectCard
              title="Wandering PAW"
              repoLink="https://github.com/Sadia-Tasnim-Meem/Wandering-Paw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
