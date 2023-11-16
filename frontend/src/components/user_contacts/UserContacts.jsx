import "./user_contacts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const UserContacts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user_contacts"],
    queryFn: () =>
      makeRequest.get("/user_contacts").then((res) => {
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
    <div className="user_contacts">
      {data && (
        <div>
          <h2>User Details</h2>
          <p>User ID: {data[0].id}</p>
          <p>LinkedIn: {data[0].userLinkedin}</p>
          <p>Facebook: {data[0].userFacebook}</p>
          {/* Add more details based on your user_details schema */}
        </div>
      )}
    </div>
  );
};

export default UserContacts;
