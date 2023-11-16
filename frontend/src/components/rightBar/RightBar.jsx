import React, { useState } from 'react';
import DetailsBox from './DetailsBox';
import "./rightBar.scss";

const RightBar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedSession, setSelectedSession] = useState({
    mentorName: '',
    mentorExpertise: '',
    sessionTitle: '',
    sessionDate: '',
    sessionStartTime: '',
    sessionDuration: '',
    audience: '',
    description: ''
  });

  const toggleDetails = (session) => {
    setSelectedSession(session);
    setShowDetails(!showDetails);
  };
  return (
    <div className="rightBar">
        <h1>NOTIFICATIONS</h1>
       <div className="container">
        <div className="item">
          <span>Your upcoming sessions</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>  Jane Doe<br></br>  Date: 20 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Jane Doe',
                mentorExpertise: 'Web Development',
                sessionTitle: 'Basic Web Dev',
                sessionDate: '20.11.23',
                sessionStartTime: '6:00 PM',
                sessionDuration: '2 hours',
                audience: '5',
                description: 'This session is especially made for the begineers'
              })}>DETAILS</button>
            </div>
            
            {showDetails && <DetailsBox onClose={() => setShowDetails(false)} {...selectedSession} />}
          
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>  Ramuma Tatata<br></br>  Date: 24 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Ramuma Tatata',
                mentorExpertise: 'Graphics Design',
                sessionTitle: 'Advanced Graphics Design',
                sessionDate: '24.11.23',
                sessionStartTime: '6:00 PM',
                sessionDuration: '3 hours',
                audience: '2',
                description: 'Rock your design skill by learning from here'
              })}>DETAILS</button>
            </div>
            
            {showDetails && <DetailsBox onClose={() => setShowDetails(false)} {...selectedSession} />}
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>  Hoccah Matata<br></br>  Date: 29 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Hoccah Matata',
                mentorExpertise: 'Block Chain Development',
                sessionTitle: 'Advanced Graphics Design',
                sessionDate: '29.11.23',
                sessionStartTime: '6:00 PM',
                sessionDuration: '3 hours',
                audience: '2',
                description: 'Start your block chain journey from here'
              })}>DETAILS</button>
            </div>
            
            {showDetails && <DetailsBox onClose={() => setShowDetails(false)} {...selectedSession} />}
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default RightBar;
