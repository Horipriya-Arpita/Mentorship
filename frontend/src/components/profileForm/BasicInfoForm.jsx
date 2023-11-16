import "../../pages/profile/profile.scss"
import React from "react";

const BasicInfoForm = () => {
  return (
    <form className="basic-info-form">
      <label>
        Full Name:
        <input type="text" placeholder="Your Full Name" />
      </label>
      {/* Add more form fields for Basic Info */}
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
