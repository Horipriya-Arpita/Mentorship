// EducationData.jsx
import React from "react";
import "./educationData.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const EducationData = () => {
  const { isLoading, error, data: educationData } = useQuery({
    queryKey: ["education_set"],
    queryFn: () =>
      makeRequest.get("/educations").then((res) => {
        return res.data; // Update this line
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("kaj2 "+educationData)

  return (
    <div className="education_data">
      <h2>Education Data</h2>
      <ul>
        {educationData &&
          educationData.educationdata.map((education) => (
            <li key={education.id}>
              <strong>{education.institution}</strong> - Degree:{" "}
              {education.degree}, Start Year: {education.start_year}, End Year:{" "}
              {education.end_year || "Not specified"}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EducationData;
