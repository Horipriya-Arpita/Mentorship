import React from "react";
import "./skillSet.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const SkillSet = () => {
  const { isLoading, error, data: skilldata } = useQuery({
    queryKey: ["skill_set"],
    queryFn: () =>
      makeRequest.get("/skills").then((res) => {
        return res.data; // Update this line
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="skill_set">
      <h2>Skill-set </h2>
      <ul>
        {skilldata && skilldata.skilldata.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.skill_name}</strong> - Level: {skill.skill_level || "Not specified"}
          </li>
        ))}
      </ul>
    </div>
  );
};