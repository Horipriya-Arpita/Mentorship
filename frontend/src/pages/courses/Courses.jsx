import React from "react";
import "./courses.scss";

const Courses = () => {
  const coursesData = [
    {
      title: "Course Title 1",
      mentor: "Mentor Name 1",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis neque non maximus facilisis.",
      videoLink: "https://www.youtube.com/embed/UzxYlbK2c7E", // Example link, replace with your own
    },
    {
      title: "Course Title 2",
      mentor: "Mentor Name 2",
      details: "Vestibulum fermentum elit a semper hendrerit. Donec aliquet mauris sed justo finibus, vel accumsan tortor malesuada.",
      videoLink: "https://www.youtube.com/embed/3QhU9jd03a0", // Example link, replace with your own
    },
    {
      title: "Course Title 3",
      mentor: "Mentor Name 3",
      details: "Curabitur at consectetur libero. Duis ullamcorper urna eget odio malesuada, id facilisis eros congue.",
      videoLink: "https://www.youtube.com/embed/8hly31xKli0", // Example link, replace with your own
    },
    {
      title: "Course Title 4",
      mentor: "Mentor Name 4",
      details: "Integer laoreet nisi at est tristique, vel mattis nisl bibendum. Praesent sit amet neque nec libero egestas feugiat.",
      videoLink: "https://www.youtube.com/embed/HXV3zeQKqGY", // Example link, replace with your own
    },
    {
      title: "Course Title 5",
      mentor: "Mentor Name 5",
      details: "Fusce rhoncus, dolor a consequat tristique, augue nunc lacinia purus, at consequat eros tellus quis arcu.",
      videoLink: "https://www.youtube.com/embed/eIrMbAQSU34", // Example link, replace with your own
    },
  ];

  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="course-info">
        {coursesData.map((course, index) => (
          <div key={index} className="course">
            <div className="details">
              <h3>{course.title}</h3>
              <p>Mentor: {course.mentor}</p>
              <p>{course.details}</p>
            </div>
            <div className="video">
              <iframe
                title={`Course Video ${index + 1}`}
                width="100%"
                height="100%"
                src={course.videoLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
