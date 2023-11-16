import React from "react";
import "./connections.scss";

const Connections = () => {
  // Sample data for additional cards
  const connectionsData = [
    {
      name: "Jane Doe",
      date: "20 November 2023",
      skills: "JavaScript, React, Node.js",
      lastSession: "15 November 2023",
      lastSessionTitle: "Web Development",
      nextSession: "25 November 2023",
    },
    {
      name: "John Doe",
      date: "25 November 2023",
      skills: "HTML, CSS, Python",
      lastSession: "20 November 2023",
      lastSessionTitle: "Data Science",
      nextSession: "30 November 2023",
    },
    {
      name: "Alice Wonderland",
      date: "18 November 2023",
      skills: "Java, Spring Boot, MySQL",
      lastSession: "12 November 2023",
      lastSessionTitle: "Backend Development",
      nextSession: "22 November 2023",
    },
    {
      name: "Bob Builder",
      date: "22 November 2023",
      skills: "C++, Unity, Game Development",
      lastSession: "17 November 2023",
      lastSessionTitle: "Game Design",
      nextSession: "27 November 2023",
    },
    {
      name: "Eve Explorer",
      date: "27 November 2023",
      skills: "Python, Django, REST APIs",
      lastSession: "22 November 2023",
      lastSessionTitle: "Full Stack Development",
      nextSession: "2 December 2023",
    },
    {
      name: "Charlie Coder",
      date: "30 November 2023",
      skills: "React Native, Firebase",
      lastSession: "25 November 2023",
      lastSessionTitle: "Mobile App Development",
      nextSession: "5 December 2023",
    },
    {
      name: "Grace Developer",
      date: "15 November 2023",
      skills: "Angular, TypeScript, Express",
      lastSession: "10 November 2023",
      lastSessionTitle: "Frontend Development",
      nextSession: "20 November 2023",
    },
    {
      name: "Sam Scripter",
      date: "10 November 2023",
      skills: "Python, Flask, MongoDB",
      lastSession: "5 November 2023",
      lastSessionTitle: "Web APIs",
      nextSession: "15 November 2023",
    },
    {
      name: "Olivia Operator",
      date: "5 November 2023",
      skills: "Java, Spring Boot, Hibernate",
      lastSession: "1 November 2023",
      lastSessionTitle: "Database Design",
      nextSession: "10 November 2023",
    },
    {
      name: "David Designer",
      date: "2 November 2023",
      skills: "UI/UX Design, Figma",
      lastSession: "28 October 2023",
      lastSessionTitle: "Design Principles",
      nextSession: "7 November 2023",
    },
    {
      name: "Sophie Stylist",
      date: "28 October 2023",
      skills: "Fashion Design, Sketching",
      lastSession: "23 October 2023",
      lastSessionTitle: "Trend Analysis",
      nextSession: "2 November 2023",
    },
  ];

  return (
    <div className="connections">
      <h1>Connections</h1>
      <div className="connection-info">
        {connectionsData.map((connection, index) => (
          <div key={index} className="connection">
            <img
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt={`Connection Avatar ${index}`}
            />
            <div className="details">
              <h3>{connection.name}</h3>
              <p>{`Date: ${connection.date}`}</p>
              <p className="skills">{`Skills: ${connection.skills}`}</p>
              <p className="last-session">{`Last Session: ${connection.lastSession}`}</p>
              <p className="last-session-title">{`Last Session Title: ${connection.lastSessionTitle}`}</p>
              <p className="next-session">{`Next Session: ${connection.nextSession}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
