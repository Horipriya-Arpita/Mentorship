import React from 'react';

const DetailsBox = ({ onClose, mentorName, mentorExpertise, sessionTitle, sessionDate, sessionStartTime, sessionDuration, audience, description }) => {
  return (
    <div className="detailsBox">
      <div className="content">
        <h3>SESSION DESCRIPTION</h3>
        <p>
          {mentorName && `Mentor Name: ${mentorName}`}
          {mentorExpertise && <br />}
          {mentorExpertise && `Mentor Expertise: ${mentorExpertise}`}
          {sessionTitle && <br />}
          {sessionTitle && `Session Title: ${sessionTitle}`}
          {sessionDate && <br />}
          {sessionDate && `Session Date: ${sessionDate}`}
          {sessionStartTime && <br />}
          {sessionStartTime && `Session Start Time: ${sessionStartTime}`}
          {sessionDuration && <br />}
          {sessionDuration && `Session Duration: ${sessionDuration}`}
          {audience && <br />}
          {audience && `Audience: ${audience}`}
          {description && <br />}
          {description && `Description: ${description}`}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DetailsBox;