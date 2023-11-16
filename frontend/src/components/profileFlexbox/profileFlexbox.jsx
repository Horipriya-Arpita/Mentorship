import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profileFlexbox.scss";

export const ProfileFlexbox = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserDetails = async () => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    if (!token) {
      return;
    }

    try {
      const response = await axios.get(`/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      console.log("Fetched user data:", userData); // Added console log
      setUserData(userData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!userData) {
    return <div>Loading... why</div>;
  }

  const { name, profile_pic, skills } = userData;

  return (
    <div className="profile-flexbox">
      <div className="flexbox-container">
        <div className="profile-image">
          <img src={profile_pic} alt="User profile image" />
        </div>

        <div className="profile-info">
          <h2>{name}</h2>
          {skills && skills.length > 0 && (
            <div className="skills">
              <h4>Skills</h4>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>
                    {skill} {/* Added console log */}
                    console.log("Skill:", skill);
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="buttons">
            <button>Follow</button>
            <a
              href={`/profile/${userData.userId}`}
              className="profile-detail-btn"
            >
              Profile Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFlexbox;
