import "../profileForm/experienceForm.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const ExperienceForm = () => {
  const queryClient = useQueryClient();
  
  /*Skill Portion starts*/ 
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

  //console.log("arr"+[selectedExpertise]);

  const removeExpertise = (index) => {
    const updatedExpertise = [...selectedExpertise];
    updatedExpertise.splice(index, 1);
    setSelectedExpertise(updatedExpertise);
  };

  const updateExpertise = async () => {
    const formData = {
      skills: selectedExpertise,
    };
  
    console.log("Selected Expertise:", formData.skills);
  
    try {
      await makeRequest.post("/skills/add", formData);
      queryClient.invalidateQueries("skills");
    } catch (error) {
      console.error("Error updating expertise:", error);
    }
  };
  
  /*Skill Portion ends*/ 

  /*work Portion starts*/ 

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

  const updateWorkExperiences = async () => {
    try {
      await makeRequest.post("/work/add", {
        experiences: workExperiences,
      });
      queryClient.invalidateQueries("work");
    } catch (error) {
      console.error("Error updating work experiences:", error);
    }
  };

  
  /*work Portion ends*/ 

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

  console.log("nana" + [educations]);

  const updateEducations = async () => {
    try {
      await makeRequest.post("/educations/add", {
        educations: educations,
      });
      queryClient.invalidateQueries("educations");
    } catch (error) {
      console.error("Error updating educations:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateExpertise();
    updateWorkExperiences();
    updateEducations();
  };

  return (
    <form className="experience-form">
      {/* Expertise Section */}
      <label>
        Expertise:
        <select
          multiple
          value={selectedExpertise}
          onChange={handleExpertiseChange}
        >
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
          <input
            type="text"
            value={newExpertise}
            onChange={handleNewExpertiseChange}
          />
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
        <button type="button" onClick={updateExpertise}>
          Update Expertise
        </button>
      </div>

      {/* Work Experience Section */}
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
              dateFormat="yyyy"
              showYearPicker
            />

            <label>Start Year:</label>
            <DatePicker
            dateFormat="yyyy"
              selected={experience.startYear}
              value= {experience.startYear}
              onChange={(year) =>
                handleWorkExperienceChange(index, "startYear", year)
              }
              showYearPicker
            />

            <label>End Year:</label>
            <DatePicker
              dateFormat="yyyy"
              selected={experience.endYear}
              value={experience.endYear}
              onChange={(year) =>
                handleWorkExperienceChange(index, "endYear", year)
              }
              showYearPicker
            />
          </div>
        ))}
        <button type="button" onClick={addWorkExperience}>
          Add Work Experience
        </button>
        <button type="button" onClick={updateWorkExperiences}>
          Update Work Experiences
        </button>
      </div>

      {/* Education Section */}
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
            <DatePicker
              dateFormat="yyyy"
              selected={education.startYear}
              value={education.startYear}
              onChange={(year) =>
                handleEducationChange(index, "startYear", year)
              }
              showYearPicker
            />

            <label>End Year:</label>
            <DatePicker
              dateFormat="yyyy"
              selected={education.endYear}
              value={education.endYear}
              onChange={(year) =>
                handleEducationChange(index, "endYear", year)
              }
              showYearPicker
            />
          </div>
        ))}
        <button type="button" onClick={addEducation}>
          Add Education
        </button>
        <button type="button" onClick={updateEducations}>
          Update Educations
        </button>
      </div>

      {/* Final Submit Button */}
      <button type="submit" onClick={handleSubmit}>
        Update All
      </button>
    </form>
  );
};

export default ExperienceForm;