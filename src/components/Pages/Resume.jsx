import React from "react";
import Divider from "@mui/material/Divider";
import { steps } from "../MenuData";

const Resume = () => {
  return (
    <div className="resume" style={{ padding: "1rem", background: "#ecf5f7" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Welcome to our Resume & ATS Analyzer
      </h1>
      <Divider component="" style={{ marginBottom: "1rem" }} />
      <div className="resume-content">
        <div className="heading">
          <h1>Build a Job-Winning Resume and Beat the ATS</h1>
          <p>
            Create a professional resume in minutes and analyze how well it
            matches your dream job. Our AI-powered ATS scanner gives you
            real-time feedback to help you get noticed.
          </p>
          <p>
            Whether you're a recent graduate or an experienced professional, our
            resume builder is designed to help you stand out from the
            competition. With customizable templates and expert tips, you'll
            have everything you need to create a resume that gets results.
          </p>
          <div className="button">
            <div className="btn1">
              <img src="ats.svg" alt="ATS" />
              <button className="btn" style={{ background: "blue" }}>
                <a
                href="https://resume-scanner-1-55df.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: "blue",
                  color: "white",
                  fontSize: "1.2rem",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Try ATS Analyzer
              </a>
              </button>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/resume1.png" alt="Resume" />
        </div>
      </div>
      <Divider component="" style={{ marginBottom: "1rem" }} />

      <div className="features" style={{ marginTop: "1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Key Features of Our Resume Builder & ATS Analyzer
        </h2>
        <div className="content">
          <div className="card">
            <i
              className="fa-solid fa-file-invoice fa-fade"
              style={{ color: "#5bdcf5" }}
            ></i>
            <h2>Easy Resume Builder</h2>
            <p>
              Fill out simple forms and instantly generate a professional resume
              using clean, modern templates.
            </p>
          </div>

          <div className="card">
            <i
              className="fa-solid fa-file-circle-check fa-fade"
              style={{ color: "#0de727" }}
            ></i>
            <h2>ATS Compatibility Checker</h2>
            <p>
              Upload your resume and job description to see how well they align
              — get your ATS match score in seconds.
            </p>
          </div>

          <div className="card">
            <i
              className="fa-solid fa-robot fa-bounce"
              style={{ color: "red" }}
            ></i>
            <h2>Smart AI Suggestions</h2>
            <p>
              Fill out simple forms and instantly generate a professional resume
              using clean, modern templates.
            </p>
          </div>

          <div className="card">
            <i
              className="fa-solid fa-print fa-shake"
              style={{ color: "blue" }}
            ></i>
            <h2>Download as PDF</h2>
            <p>
              {" "}
              Download your resume in polished PDF format, ready to send or
              upload on job portals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
