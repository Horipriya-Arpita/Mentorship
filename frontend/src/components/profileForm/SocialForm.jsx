import "../../pages/profile/profile.scss";
import React, { useState } from "react";
import { makeRequest } from "../../axios";

const SocialForm = (userId) => {
  const [socialFormData, setSocialFormData] = useState({
    linkedin: '',
    facebook: '',
    twitter: '',
    github: '',
  });

  const handleUpdate = async () => {
    try {
      
      // Assuming you have the user ID stored in some variable
     /* get user ID from somewhere */

      await makeRequest.post('/user_contacts/add', {
        ...socialFormData,
        userID: userId,
      });

      // Optionally, you can reset the form or perform any other actions
      setSocialFormData({
        linkedin: '',
        facebook: '',
        twitter: '',
        github: '',
      });

      console.log('Contacts updated successfully');
    } catch (error) {
      console.error('Error updating contacts:', error);
      // Handle error as needed
    }
  };

  return (
    <form className="social-form">
      <label>
        Linkedin URL:
        <input
          type="text"
          placeholder="LinkedIn"
          value={socialFormData.linkedin}
          onChange={(e) => setSocialFormData({ ...socialFormData, linkedin: e.target.value })}
        />
      </label>
      <label>
        Facebook URL:
        <input
          type="text"
          placeholder="Facebook"
          value={socialFormData.facebook}
          onChange={(e) => setSocialFormData({ ...socialFormData, facebook: e.target.value })}
        />
      </label>
      <label>
        Twitter URL:
        <input
          type="text"
          placeholder="Twitter"
          value={socialFormData.twitter}
          onChange={(e) => setSocialFormData({ ...socialFormData, twitter: e.target.value })}
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </form>
  );
};

export default SocialForm;
