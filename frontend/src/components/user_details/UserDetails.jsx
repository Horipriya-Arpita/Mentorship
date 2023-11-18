import "./user_details.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const UserDetails = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user_details"],
    queryFn: () =>
      makeRequest.get("/user_details").then((res) => {
        return res.data;
      }),
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user_details">
      {data && data.length > 0 ? (
        <div>
          <h2>User Details</h2>
          <p className="bio"><strong>Bio:</strong> {data[0].bio || "Not provided"}</p>
          <p><strong>Name:</strong> {data[0].name || "Not provided"}</p>
          <p><strong>Gender:</strong> {data[0].gender || "Not provided"}</p>
          <p><strong>Country:</strong> {data[0].country || "Not provided"}</p>
          <p><strong>Language:</strong> {data[0].language || "Not provided"}</p>
        </div>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  );
};

export default UserDetails;
