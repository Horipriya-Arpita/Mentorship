import React, { useState } from "react";
import "./events.scss";

const Events = () => {
  // Initialize state to track the selected state for each event
  const [eventSelection, setEventSelection] = useState({});

  const handleButtonClick = (index, type) => {
    // Create a copy of the existing state
    const updatedSelection = { ...eventSelection };
    // Toggle the selected state for the specific event
    updatedSelection[index] = {
      ...updatedSelection[index],
      [type]: !updatedSelection[index]?.[type],
    };
    // Update the state
    setEventSelection(updatedSelection);
  };

  const eventsData = [
    {
      title: "Event Title 1",
      date: "10 December 2023",
      time: "7:00 PM",
    },
    {
      title: "Event Title 2",
      date: "15 December 2023",
      time: "6:30 PM",
    },
    {
      title: "Event Title 3",
      date: "20 December 2023",
      time: "8:00 PM",
    },
    {
      title: "Event Title 4",
      date: "25 December 2023",
      time: "5:30 PM",
    },
  ];

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-info">
        {eventsData.map((event, index) => (
          <div key={index} className="event">
            <div className="details">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
            </div>
            <div className="buttons">
              <button
                className={`going-button ${
                  eventSelection[index]?.going ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(index, "going")}
              >
                Going
              </button>
              <button
                className={`interested-button ${
                  eventSelection[index]?.interested ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(index, "interested")}
              >
                Interested
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
