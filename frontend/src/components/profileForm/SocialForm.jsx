import React, { useState } from "react";

const SocialForm = () => {
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value);
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleTwitterChange = (e) => {
    setTwitter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the social links (e.g., update the database)
    console.log("Updating social links:", { linkedin, facebook, twitter });
  };

  return (
    <form className="social-form" onSubmit={handleSubmit}>
      <label>
        Linkedin URL:
        <input
          type="text"
          value={linkedin}
          onChange={handleLinkedinChange}
          placeholder="Enter Linkedin URL"
        />
      </label>
      <label>
        Facebook URL:
        <input
          type="text"
          value={facebook}
          onChange={handleFacebookChange}
          placeholder="Enter Facebook URL"
        />
      </label>
      <label>
        Twitter URL:
        <input
          type="text"
          value={twitter}
          onChange={handleTwitterChange}
          placeholder="Enter Twitter URL"
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default SocialForm;
