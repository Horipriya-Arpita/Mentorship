import React, { useState } from "react";
import './profile.scss';
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

const ProjectCard = ({ title, repoLink }) => {
  return (
    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-card">
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

            {activeTab === 'social' && <SocialForm userId={userId} />}
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
  <div className="Additional-Info">
    <h2>Additional Information</h2>
    <ul>
      <li><strong>Education:</strong> Bachelor's in Computer Science</li>
      <li><strong>Location:</strong> City, Country</li>
      <li><strong>Language:</strong> English, Hindi</li>
      <li><strong>Gender:</strong> Female</li>
    </ul>
  </div>
  <div className="Skill-set">
    <h2>Skill Set</h2>
    <ul>
      <li>Languages: C++ | Python | JavaScript | Typescript | Solidity</li>
      <li>Frontend: HTML | CSS | React | Next.js | Chakra UI</li>
      <li>Backend: FastAPI | Express.js | Node.js | PostgreSQL | Firebase | NoSQL</li>
      <li>Blockchain/Smart Contracts: Solidity | Javascript | Typescript | Web3.js | Web3.py | Foundry | Remix | Hardhat | Ethers | Mocha | ChainLink | Alchemy | Infura | Ganache</li>
      <li>DevOps: Git | Docker | Kubernetes | Github CI/CD | Linux | ArgoCD | Datadog | Sentry</li>
      <li>QA: Pytest | Jest | Mocha | Chai | Load Testing | K6</li>
      <li>Data Science: Pandas | Numpy | Matplotlib | Jupyter Notebooks | SQL</li>
      <li>Others: Latex | Markdown | Vercel | Web Scraping</li>
    </ul>
  </div>

  <div className="proficient-in">
    <h2>Proficient In</h2>
    <ul>
      <li><span>C++</span></li>
      <li><span>Python</span></li>
      <li><span>Javascript/Typescript</span></li>
      <li><span>Algorithmic Problem Solving (solved 5500+ problems on various online platforms)</span></li>
      <li><span>Data Structures and Algorithms</span></li>
      <li><span>Competitive Programming</span></li>
      <li><span>Backend Engineering</span></li>
      <li><span>Full Stack Development</span></li>
      <li><span>Blockchain / Smart Contracts</span></li>
      <li><span>Data Science</span></li>
    </ul>
  </div>

  <div className="experience">
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>Google</strong>
        <span>Entry-level software engineer II, 2019-2020</span>
      </li>
      <li>
        <strong>Microsoft</strong>
        <span>Mid-level software engineer III, 2020-2021</span>
      </li>
      <li>
        <strong>Amazon</strong>
        <span>Senior staff engineer V, 2021-2022</span>
      </li>
      <li>
        <strong>Cefalo</strong>
        <span>Principal engineer VI, 2022-present</span>
      </li>
    </ul>
  </div>
  <div className="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            <ProjectCard title="Portfolio Website" repoLink="https://github.com/Horipriya-Arpita/Portfolio-website" />
            <ProjectCard title="SWE 250 Project" repoLink="https://github.com/Horipriya-Arpita/SWE-project-250" />
            <ProjectCard title="To-Do List" repoLink="https://github.com/mugdha-samiul/To-Do-list" />
            <ProjectCard title="CP Practice" repoLink="https://github.com/mugdha-samiul/Online-Judge-Problem-Discussion" />
            <ProjectCard title="Connect SWE" repoLink="https://github.com/Rifat-Shariar-Sakil-24/connectSWE" />
            <ProjectCard title="Wandering PAW" repoLink="https://github.com/Sadia-Tasnim-Meem/Wandering-Paw" />
          </div>
        </div>
</div>

      
    </div>
  );
}
export default Profile;