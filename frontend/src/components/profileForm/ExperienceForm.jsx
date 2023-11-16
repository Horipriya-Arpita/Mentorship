import React, { useState } from "react";

const ExperienceForm = () => {
  const [expertiseOptions] = useState([
    "Problem Solving",
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Marketing",
    // Add more options as needed
  ]);

  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [newExpertise, setNewExpertise] = useState("");

  const handleExpertiseChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedExpertise(selectedOptions);
  };

  const handleNewExpertiseChange = (e) => {
    setNewExpertise(e.target.value);
  };

  const addNewExpertise = () => {
    if (newExpertise && !selectedExpertise.includes(newExpertise)) {
      setSelectedExpertise([...selectedExpertise, newExpertise]);
      setNewExpertise("");
    }
  };

  const removeExpertise = (index) => {
    const updatedExpertise = [...selectedExpertise];
    updatedExpertise.splice(index, 1);
    setSelectedExpertise(updatedExpertise);
  };

  const [workExperiences, setWorkExperiences] = useState([
    { company: "", startDate: "", endDate: "" },
  ]);

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: "", startDate: "", endDate: "" },
    ]);
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  return (
    <form className="experience-form">
      <label>
        Expertise:
        <select multiple value={selectedExpertise} onChange={handleExpertiseChange}>
          {expertiseOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div>
        <label>
          Add New Expertise:
          <input type="text" value={newExpertise} onChange={handleNewExpertiseChange} />
        </label>
        <button type="button" onClick={addNewExpertise}>
          Add
        </button>
      </div>

      <div>
        <h3>Selected Expertise:</h3>
        {selectedExpertise.map((expertise, index) => (
          <div key={index}>
            {expertise}
            <button type="button" onClick={() => removeExpertise(index)}>
              &#10006;
            </button>
          </div>
        ))}
      </div>

      <div>
        <h3>Work Experience</h3>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                value={experience.company}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "company", e.target.value)
                }
              />
            </label>
            <label>
              Start Date:
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "startDate", e.target.value)
                }
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "endDate", e.target.value)
                }
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addWorkExperience}>
          Add Work Experience
        </button>
      </div>

      {/* Add form fields for Education */}
      {/* ... */}

      <button type="submit">Update</button>
    </form>
  );
};

export default ExperienceForm;
