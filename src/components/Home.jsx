import React from 'react';
import Divider from '@mui/material/Divider';
import RedirectButton from "./RedirectionButton";

const Home = () => {

  return (
    <div className='home'>
      <div className='header'>
        <img src="/imgi.png" alt="Logo" className='logo' />
        <div className="title">
          <h1>Prepare For your Interview</h1>
          <p>Get ready for your next job opportunity</p>
          <button className='btn'><a href='/about-us'>Get Started</a></button>
        </div>
      </div>

      <Divider component="" style={{ marginTop: "1rem" }} />

      <div className='sub-header'>
        <h1>Services We Provide</h1>
        <p>We offer a range of services to help you prepare for your interview</p>
      </div>

      <div className='content'>
        <div className="card">
          <i className="fa-solid fa-book-open fa-shake" style={{ color: "#74C0FC" }}></i>
          <h2>Study Materials</h2>
          <p>Prepare for your interview with our comprehensive study materials.</p>
          <RedirectButton label="Explore" targetPath="/study-material" />
        </div>
        <div className="card">
          <i className="fa-solid fa-list-check fa-beat-fade" style={{ color: "green" }}></i>
          <h2>Aptitude Test</h2>
          <p>Test your skills with our aptitude tests and quizzes</p>
          <RedirectButton label="Explore" targetPath="/aptitude-test" />
        </div>
        <div className="card">
          <img src="/cv.png" alt="Logo" className="cv fa-fade" />
          <h2>AI Resume Analysis</h2>
          <p>Analyse your resume with our AI-powered resume analysis tool.</p>
          <RedirectButton label="Explore" targetPath="/resume" />
        </div>
        <div className="card">
          <img src="/mock.png" alt="Logo" className="cv fa-beat-fade" />
          <h2>AI Mock Interviews</h2>
          <p>Practice your mock interview with our AI-powered mock interview tool.</p>
          <RedirectButton label="Explore" targetPath="/mock-interview" />
        </div>
        <div className="card">
          <img src="/ats.jpg" alt="Logo" className="cv fa-fade" />
          <h2>AI Resume Bilder</h2>
          <p>Create a professional resume with our easy-to-use builder</p>
          <RedirectButton label="Explore" targetPath="/resume-builder" />
        </div>
        <div className="card">
          <img src="/coding.png" alt="Logo" className="cv fa-fade" />
          <h2>AI Coding Practise</h2>
          <p>Practise Coding test with our AI powered Coding Practise</p>
          <RedirectButton label="Explore" targetPath="/coding" />
        </div>
      </div>
      <Divider component="" style={{ marginTop: "2rem" }} />
    </div>
  )
}

export default Home
