import React, { useState } from 'react';
import myLocalImage0 from "../../assets/1000.jpg";
import myLocalImage1 from "../../assets/1001.jpg";
import myLocalImage2 from "../../assets/1002.jpg";
import myLocalImage3 from "../../assets/1003.jpg";
import myLocalImage4 from "../../assets/1004.jpg";
import myLocalImage5 from "../../assets/1005.jpg";
import myLocalImage6 from "../../assets/1006.jpg";
import myLocalImage7 from "../../assets/1007.jpeg";
import myLocalImage8 from "../../assets/1008.jpeg";
import myLocalImage9 from "../../assets/1009.jpg";
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
                src={myLocalImage0}
                alt=""
              />
              <span>  Jane Doe<br></br>  Date: 20 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Jahid Hasan',
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
                src={myLocalImage1}
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <span>  Tonmoy Bhowmik<br></br>  Date: 24 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Sanzida Afrin',
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
                src={myLocalImage2}
                alt=""
              />
              <span>  Jisan Ahmed<br></br>  Date: 29 November 2023<br></br>  Time : 6:00 PM</span>
            </div>
            <div className="buttons">
              {/* Pass session information to DetailsBox */}
              <button onClick={() => toggleDetails({
                mentorName: 'Shihabuzzaman',
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
          <span>Past Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage3}
                alt=""
              />
              <p>
                <span>Graphics Design session <br /> by Zawad Chowdhury <br /> </span> Date : 11.11.23
              </p>
            </div>
            <span>1 week ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage4}
                alt=""
              />
              <p>
                <span>Machine Learning session <br /> by Karim Benzema <br /> </span> Date : 11.09.23
              </p>
            </div>
            <span>2 month ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage5}
                alt=""
              />
              <p>
                <span>Data Science session <br /> by Sumonto Saha <br /> </span> Date : 08.05.23
              </p>
            </div>
            <span>6 months ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage6}
                alt=""
              />
              <p>
                <span>UI/UX Design session <br /> by Sajib Chowdhury <br /> </span> Date : 07.03.23
              </p>
            </div>
            <span>8 months ago</span>
          </div>
        </div>
        <div className="item">
          <span>Connected with</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage7}
                alt=""
              />
              <div className="online" />
              <span>Ridwan Siam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage8}
                alt=""
              />
              <div className="online" />
              <span>Karim Benzema</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage9}
                alt=""
              />
              <div className="online" />
              <span>Abdur Rahman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage2}
                alt=""
              />
              <div className="online" />
              <span>Rifat Shariar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage4}
                alt=""
              />
              <div className="online" />
              <span>Alvi Rahman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage6}
                alt=""
              />
              <div className="online" />
              <span>Jamal Bhuiyan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage7}
                alt=""
              />
              <div className="online" />
              <span>Tamim Iqbal</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage6}
                alt=""
              />
              <div className="online" />
              <span>Nayem Bhuiyan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={myLocalImage1}
                alt=""
              />
              <div className="online" />
              <span>Sanajana Afrin</span>
            </div>
          </div>
          
        </div>
      </div> 
    </div>
  );
};

export default RightBar;
