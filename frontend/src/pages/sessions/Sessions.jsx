import React from "react";
import "./sessions.scss";

const Sessions = () => {
  // Sample data for session cards
  const sessionsData = [
    {
      title: "Web Development Basics",
      mentor: "John Smith",
      date: "15 November 2023",
      time: "2:00 PM",
      audience: "Beginner",
      link: "#", // Replace with the actual link
    },
    {
      title: "React Fundamentals",
      mentor: "Jane Doe",
      date: "20 November 2023",
      time: "3:30 PM",
      audience: "Intermediate",
      link: "#", // Replace with the actual link
    },
    {
      title: "Node.js Workshop",
      mentor: "Alice Wonderland",
      date: "25 November 2023",
      time: "5:00 PM",
      audience: "Advanced",
      link: "#", // Replace with the actual link
    },
    {
      title: "Python for Data Science",
      mentor: "Bob Builder",
      date: "30 November 2023",
      time: "1:00 PM",
      audience: "Intermediate",
      link: "#", // Replace with the actual link
    },
    {
      title: "Mobile App Design",
      mentor: "Eve Explorer",
      date: "5 December 2023",
      time: "4:30 PM",
      audience: "Advanced",
      link: "#", // Replace with the actual link
    },
    {
      title: "Frontend Frameworks",
      mentor: "Charlie Coder",
      date: "10 December 2023",
      time: "2:30 PM",
      audience: "Intermediate",
      link: "#", // Replace with the actual link
    },
    {
      title: "Database Management",
      mentor: "Grace Developer",
      date: "15 December 2023",
      time: "6:00 PM",
      audience: "Advanced",
      link: "#", // Replace with the actual link
    },
  ];

  return (
    <div className="sessions">
      <h1>Sessions</h1>
      <div className="session-info">
        {sessionsData.map((session, index) => (
          <div key={index} className="session">
            <div className="details">
              <h3>{session.title}</h3>
              <p>{`Mentor: ${session.mentor}`}</p>
              <p>{`Date: ${session.date}`}</p>
              <p>{`Time: ${session.time}`}</p>
              <p>{`Audience: ${session.audience}`}</p>
              <p>{`Link: ${session.link}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
