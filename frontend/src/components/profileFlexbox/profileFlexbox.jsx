// ProfileFlexbox.jsx
import "./profileFlexbox.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";

export const ProfileFlexbox = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile_flexboxs"],
    queryFn: () =>
      makeRequest.get("/profile_flexboxs").then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="profile-flexbox">
      {data.map((user, userIdx) => (
        <div key={userIdx} className="flexbox-container">
          <h2>User ID: {user.userId}</h2>
          <div className="user-details">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
          </div>
          <div className="skills">
            {user.skills && (
              <h4 key={userIdx}>Skills: {user.skills}</h4>
            )}
          </div>
          <div className="buttons">
          <Link to={`/profile/${user.userId}`} >
          <span><button className="profile-detail-btn">Profile</button></span>
          </Link>
            {/* <button className="profile-detail-btn">Profile</button> */}
            <button className="follow">Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileFlexbox;