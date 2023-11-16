import React from 'react';
import './profileFlexbox.scss'

const UserFlexBox = ({ user }) => {
  const { image, name, skillset, workExperience } = user;

  const handleProfileDetails = () => {
    // Example: Navigate to the user's profile page or show details in a modal
    console.log(`Redirecting to ${name}'s profile details`);
  };

  const handleFollow = () => {
    // Example: Implement follow functionality
    console.log(`Following ${name}`);
  };

  return (
    <div className="container">
      <img src={image} alt={name} className="image" />
      <div className="userInfo">
        <h3>{name}</h3>
        <p>Skillset: {skillset}</p>
        <p>Work Experience: {workExperience}</p>
        <button onClick={handleProfileDetails} className="button">
          Profile Details
        </button>
        <button onClick={handleFollow} className="button">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserFlexBox;
