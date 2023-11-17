/*// import Stories from "../../components/stories/Stories"
// import Posts from "../../components/posts/Posts"
// import Share from "../../components/share/Share"
import "./home.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
//import { useQuery } from "@tanstack/react-query";
//import { makeRequest } from "../../axios";

const Home = () => {

  const { currentUser } = useContext(AuthContext);

  /*const { isLoading, error, data } = useQuery(['user_details'], () => 
    makeRequest.get("/").then((res) => {
      return res.data;
    })
  )*/

//console.log(data)
/* return (
    <div className="home">
      {/* <Stories/>
      <Share/>
      <Posts/> */
/*<h1>HOMe</h1>

      <div className="name">
        <h1>{currentUser.name}</h1>
      </div>

      <div className="user_details">

      </div>
    </div>
  )
}

export default Home*/

// Home.jsx
import "./home.scss"
import { UserDetails } from "../../components/user_details/UserDetails";
import { Sessions } from "../../components/sessions/Sessions";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { UserContacts } from "../../components/user_contacts/UserContacts";
import { SkillSet } from "../../components/skillSet/SkillSet";
import { ProfileFlexbox } from "../../components/profileFlexbox/profileFlexbox";

const Home = () => { 
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <h1>Welcome to Home Page {currentUser.name}</h1>
      <UserDetails />
      <Sessions />
      <SkillSet />
      <UserContacts />
      <ProfileFlexbox />
   
    </div>
  );
};

export default Home;
