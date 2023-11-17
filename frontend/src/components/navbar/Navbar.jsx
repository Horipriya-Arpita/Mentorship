import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
   const { toggle, darkMode } = useContext(DarkModeContext);
   const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>MENTORSHIP <br /> MANAGEMENT.</span>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HomeOutlinedIcon />
        </Link>
         {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} 
        
      </div>
      <div className="right">
        <Link to="/profile/1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <PersonOutlinedIcon />
        </Link>
        <Link to="profile/Messenger" style={{ textDecoration: 'none', color: 'inherit' }}>
          <EmailOutlinedIcon />
        </Link>
        <Link to="http://localhost:3000/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NotificationsOutlinedIcon />
        </Link>
        <div className="user">
          {/* <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          /> */}
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          {/* <span>{currentUser.name}</span> */}
          <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: 'inherit' }}>
          <span>{currentUser.name}</span>
          </Link>
          
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
