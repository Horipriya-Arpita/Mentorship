import "../profileForm/experienceForm.scss";
import React, { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const ExperienceForm = () => {
  const queryClient = useQueryClient();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

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
      setShowSuccessAlert(true);
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

    // Parse the year value as an integer
    // if (field === "startYear" || field === "endYear") {
    //   updatedExperiences[index][field] = parseInt(value, 10);
    // }

    setWorkExperiences(updatedExperiences);
  };

  const updateWorkExperiences = async () => {
    try {
      console.log("Work Experience Data:", workExperiences); // Log the data here
      await makeRequest.post("/work/add", {
        experiences: workExperiences,
      });
      queryClient.invalidateQueries("work");
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error updating work experiences:", error);
    }
  };

  /*work Portion ends*/

  /*education Portion starts*/

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

    // Parse the year value as an integer
    // if (field === "startYear" || field === "endYear") {
    //   updatedEducations[index][field] = parseInt(value, 10);
    // }

    setEducations(updatedEducations);
  };

  // console.log("nana" + [educations]);

  const updateEducations = async () => {
    try {
      console.log("Educations Experience Data:", educations);
      await makeRequest.post("/educations/add", {
        educations: educations,
      });
      queryClient.invalidateQueries("educations");
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error updating educations:", error);
    }
  };

  useEffect(() => {
    if (showSuccessAlert) {
      const timeout = setTimeout(() => {
        setShowSuccessAlert(false);
        window.alert("Update Successful!");
      }, 3000); // Set timeout for 3 seconds (adjust as needed)

      return () => clearTimeout(timeout);
    }
  }, [showSuccessAlert]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    updateExpertise();
    updateWorkExperiences();
    updateEducations();
  };

  /*education Portion ends*/
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
            />

            <label>Start Year:</label>
            <input
              type="date"
              value={experience.startYear}
              onChange={(e) =>
                handleWorkExperienceChange(index, "startYear", e.target.value)
              }
            />

            <label>End Year:</label>
            <input
              type="date"
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
            <input
              type="date"
              value={education.startYear}
              onChange={(e) =>
                handleEducationChange(index, "startYear", e.target.value)
              }
            />

            <label>End Year:</label>
            <input
              type="date"
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
