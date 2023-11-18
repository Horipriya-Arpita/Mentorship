import "./profileFlexbox.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const ProfileFlexbox = () => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["profile_flexboxs"],
      queryFn: () =>
        makeRequest.get("/profile_flexboxs").then((res) => {
          return res.data;
        }),
    },
    console.log(1)
  );

  console.log("flexbox " + data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const userData = {};

  data.forEach((item) => {
    const userID = item.userID;

    if (!userData[userID]) {
      userData[userID] = []; // Initialize an array for user ID
    }

    userData[userID].push(item.skillName); // Pushing skill data
  });

  return (
    <div className="profile-flexbox">
      {data &&
        Object.values(
          data.reduce((acc, curr) => {
            if (!acc[curr.userId]) {
              acc[curr.userId] = [];
            }
            acc[curr.userId].push(curr.skill_name);
            return acc;
          }, {})
        ).map((skills, userIdx) => (
          <div key={userIdx} className="flexbox-container">
            <h2>User ID: {userIdx}</h2>
            <div className="skills">
              {skills.map((skill, skillIdx) => (
                <h4 key={skillIdx}>{skill}</h4>
              ))}
            </div>
            <div className="buttons">
              <button className="profile-detail-btn">Profile</button>
              <button className="follow">Follow</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProfileFlexbox;
