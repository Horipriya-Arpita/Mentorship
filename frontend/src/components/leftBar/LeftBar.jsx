import { Link } from "react-router-dom";
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Market from "../../assets/3.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Messages from "../../assets/10.png";
import Courses from "../../assets/12.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
        <h2>EXPLORE</h2>
      <div className="container">
        <div className="menu">
          <hr />
          <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h4>MY PROFILE : {currentUser.name}</h4>
            </Link>
          </div>
          <hr />
          <div className="item">
            <img src={Market} alt="" />
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <h4>HOME</h4>
            </Link>
          </div>
          <hr />
          <div className="item">
            <img src={Friends} alt="" />
            <Link to="/profile/Connections" style={{ textDecoration: "none", color: "#000" }}>
              <h4>CONNECTIONS</h4>
            </Link>
    </div>
          <hr />
          <div className="item">
            <img src={Memories} alt="" />
            <Link to="/profile/Sessions" style={{ textDecoration: "none", color: "#000" }}>
            <h4>SESSIONS</h4>
            </Link>
          </div>
          <hr />
        </div>
        <div className="menu">
          <div className="item">
            <img src={Events} alt="" />
            <Link to="/profile/Events" style={{ textDecoration: "none", color: "#000" }}>
              <h4>EVENTS</h4>
            </Link>
          </div>
          <hr />
          <div className="item">
            <img src={Messages} alt="" />
            <Link to="/profile/Messenger" style={{ textDecoration: "none", color: "#000" }}>
              <h4>MESSAGES</h4>
            </Link>
          </div>
          <hr />
        </div>
        <div className="menu">
          <div className="item">
            <img src={Courses} alt="" />
            <Link to="/profile/Courses" style={{ textDecoration: "none", color: "#000" }}>
              <h4>COURSES</h4>
            </Link>
          </div>
          <hr />
        </div>
      </div> 
    </div>
  );
};

export default LeftBar;
