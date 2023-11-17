// WorkData.jsx
import React from "react";
import "./workData.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const WorkData = () => {
    const { isLoading, error, data: workData } = useQuery({
      queryKey: ["work"],
      queryFn: () =>
        makeRequest.get("/work").then((res) => {
          return res.data; // Update this line
        }),
    });
  
    console.log("isLoading", isLoading);
    console.log("error", error);
    console.log("workData", workData);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div className="work_data">
        <h2>Work Experience Data</h2>
        <ul>
          {workData &&
            workData.workdata &&
            workData.workdata.map((work) => (
              <li key={work.id}>
                <strong>{work.company}</strong> - Start Year:{" "}
                {work.start_year}, End Year: {work.end_year || "Not specified"}
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default WorkData;
  