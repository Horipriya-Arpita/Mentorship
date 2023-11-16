import "./skillSet.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const SkillSet = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["skill_set"],
    queryFn: () =>
      makeRequest.get("/skill_set").then((res) => {
        return res.data; // Update this line
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
    <div className="skill_set">
      {data && (
        <div>
          <h2>Skill-set </h2>
          {/* Render user details based on the 'data' */}
        </div>
      )}
    </div>
  );
};

export default SkillSet;
