import "./sessions.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const Sessions = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["sessions"],
    queryFn: () =>
      makeRequest.get("/sessions").then((res) => {
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
    <div className="sessions">
      {data && (
        <div>
          <h2>Sessions</h2>
          <p>User ID: {data[0].Title}</p>
          <p>Name: {data[0].Date}</p>
          <p>Gender: {data[0].StartTime}</p>
        </div>
      )}
    </div>
  );
};

export default Sessions;
