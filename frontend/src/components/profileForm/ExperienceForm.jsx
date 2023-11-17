import "../../pages/profile/profile.scss";
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
    { company: "", startYear: "", endYear: "" },
  ]);

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: "", startYear: "", endYear: "" },
    ]);
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const [educations, setEducations] = useState([
    { institution: "", degree: "", startYear: "", endYear: "" },
  ]);

  const addEducation = () => {
    setEducations([
      ...educations,
      { institution: "", degree: "", startYear: "", endYear: "" },
    ]);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
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
          <div key={index} className="form-group">
            <label>Company:</label>
            <input
              type="text"
              value={experience.company}
              onChange={(e) =>
                handleWorkExperienceChange(index, "company", e.target.value)
              }
            />

            <label>Start Year:</label>
            <input
              type="number"
              value={experience.startYear}
              onChange={(e) =>
                handleWorkExperienceChange(index, "startYear", e.target.value)
              }
            />

            <label>End Year:</label>
            <input
              type="number"
              value={experience.endYear}
              onChange={(e) =>
                handleWorkExperienceChange(index, "endYear", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addWorkExperience}>
          Add Work Experience
        </button>
      </div>

      <div className="education-section">
        <h3>Education</h3>
        {educations.map((education, index) => (
          <div key={index} className="form-group">
            <label>Institution:</label>
            <input
              type="text"
              value={education.institution}
              onChange={(e) =>
                handleEducationChange(index, "institution", e.target.value)
              }
            />

            <label>Degree:</label>
            <input
              type="text"
              value={education.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
            />

            <label>Start Year:</label>
            <input
              type="text"
              value={education.startYear}
              onChange={(e) =>
                handleEducationChange(index, "startYear", e.target.value)
              }
            />

            <label>End Year:</label>
            <input
              type="text"
              value={education.endYear}
              onChange={(e) =>
                handleEducationChange(index, "endYear", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addEducation}>
          Add Education
        </button>
      </div>


      <button type="submit">Update</button>
    </form>
  );
};

export default ExperienceForm;
