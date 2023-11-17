/*import "../../pages/profile/profile.scss"
import React from "react";

const BasicInfoForm = () => {
  return (
    <form className="basic-info-form">
      <label>
        Full Name:
        <input type="text" placeholder="Your Full Name" />
      </label>
     
      <label>
        Select Gender:
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Country:
        <input type="text" placeholder="Which country do you live in" />
      </label>
      <label>
        Language:
        <input type="text" placeholder="What language do you speak" />
      </label>
      <label>
        Bio:
        <textarea placeholder="Bio"></textarea>
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default BasicInfoForm;
*/
/*
import "../../pages/profile/profile.scss";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


const BasicInfoForm = () => {
  const [formData, setFormData] = useState({
    user_type: "",
    gender: "",
    country: "",
    language: "",
    bio: "",
    cover_pic: "",
    profile_pic: "",
  });

  const [coverPicFile, setCoverPicFile] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);

  const queryClient = useQueryClient();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "cover_pic") {
      setCoverPicFile(file);
    } else if (e.target.name === "profile_pic") {
      setProfilePicFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    console.log("Cover Pic File:", coverPicFile);
    console.log("Profile Pic File:", profilePicFile);

    try {
      // Upload cover picture
      const coverPicFormData = new FormData();
      coverPicFormData.append("file", coverPicFile);
      const coverPicResponse = await makeRequest.post("/api/upload", coverPicFormData);
      const coverPicURL = coverPicResponse.data;
  
      // Upload profile picture
      const profilePicFormData = new FormData();
      profilePicFormData.append("file", profilePicFile);
      const profilePicResponse = await makeRequest.post("/api/upload", profilePicFormData);
      const profilePicURL = profilePicResponse.data;
  
      // Update user details with picture URLs
      await makeRequest.post("/user_details/add", {
        ...formData,
        cover_pic: coverPicURL,
        profile_pic: profilePicURL,
      });
  
      // Invalidate the user_details query to refetch the updated data
      queryClient.invalidateQueries("user_details");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <form className="basic-info-form" onSubmit={handleSubmit}>
      <label>
        Select User Type:
        <select
          name="user_type"
          onChange={handleInputChange}
          value={formData.user_type}
        >
          <option value="regular">Regular</option>
          <option value="premium">Premium</option>
        </select>
      </label>
      <label>
        Select Gender:
        <select name="gender" onChange={handleInputChange} value={formData.gender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          placeholder="Which country do you live in"
          onChange={handleInputChange}
          value={formData.country}
        />
      </label>
      <label>
        Language:
        <input
          type="text"
          name="language"
          placeholder="What language do you speak"
          onChange={handleInputChange}
          value={formData.language}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          placeholder="Bio"
          onChange={handleInputChange}
          value={formData.bio}
        ></textarea>
      </label>
      <label>
        Cover Picture:
        <input
          type="file"
          name="cover_pic"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      <label>
        Profile Picture:
        <input
          type="file"
          name="profile_pic"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default BasicInfoForm;
*/
// ... (imports)

import "../../pages/profile/profile.scss";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


const BasicInfoForm = () => {
  const [formData, setFormData] = useState({
    user_type: "",
    gender: "",
    country: "",
    language: "",
    bio: "",
  });


  const queryClient = useQueryClient();

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    try {
      // Update user details with picture URLs
      await makeRequest.post("/user_details/add", {
        ...formData,
      });

      // Invalidate the user_details query to refetch the updated data
      queryClient.invalidateQueries("user_details");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <form className="basic-info-form" onSubmit={handleSubmit}>
      <label>
        Select User Type:
        <select
          name="user_type"
          onChange={handleInputChange}
          value={formData.user_type}
        >
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>
      </label>
      <label>
        Select Gender:
        <select name="gender" onChange={handleInputChange} value={formData.gender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          placeholder="Which country do you live in"
          onChange={handleInputChange}
          value={formData.country}
        />
      </label>
      <label>
        Language:
        <input
          type="text"
          name="language"
          placeholder="What language do you speak"
          onChange={handleInputChange}
          value={formData.language}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          placeholder="Bio"
          onChange={handleInputChange}
          value={formData.bio}
        ></textarea>
      </label>
      {/* <label>
        Cover Picture:
        <input
          type="file"
          name="cover_pic"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      <label>
        Profile Picture:
        <input
          type="file"
          name="profile_pic"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label> */}
      <button onClick={handleSubmit}type="submit">Update</button>
    </form>
  );
};

export default BasicInfoForm;
