import React from "react";
import { courses } from "../Course/Courses";
import Divider from "@mui/material/Divider";

const StudyMaterial = () => {
  return (
    <div className="study-material" style={{ padding: "2rem" }}>
      <div className="study-content">
        <h1>Study Material</h1>
        <p style={{ color: "#222", fontSize: "1.2rem", fontWeight: "550" }}>
          Here you can find various study materials to help you with your
          learning.
        </p>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <h1
        style={{
          padding: "0rem 2rem",
          marginTop: "1rem",
          paddingTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        Our Courses
      </h1>

      <div className="study-subject">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <img className="div1" src={course.image} alt={course.title} />
            <div className="details">
              <h3>{course.title}</h3>
              <p>
                <i
                  className="fa-solid fa-signal fa-fade"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                {course.level}
              </p>
              <button className="btn">
                <a href={course.link}>Explore</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterial;
