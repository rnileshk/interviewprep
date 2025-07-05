import { Button } from '@mui/material';
import React from 'react'

const Footer = () => {
  
  return (
      <footer className="footer">
      <div className="footer-content">

        <div className="footer-section logo-section">
          <img src="logo.png" alt="Logo" className="footer-logo" />
          <h4><strong>INTERVIEW prep</strong></h4>
          <h4>Address:</h4>
          <ul>
            <li>Cambridge Institute Of Technology, Tatisilwai, Ranchi,</li>
            <li>Jharkhand, Pin-835103</li>
          </ul><br />
          <p>Phone: <a href="tel:+919199991145" style={{ color: "#fff" }}>+91 9199991145</a></p><br />
            
          <p>Email: <a href="mailto:pradeepkr.bhk@gmail.com" style={{ color: "#fff" }}>pradeepkr.bhk@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h4 style={{ fontSize: "1.5rem" }}>Company</h4>
          <ul>
             <li> <a href='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Home</a></li>
            <li><a href='/about-us' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>About Us</a></li>
            <li> <a href='/contact-us' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Contact Us</a></li>
            <li><a href='/service' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 style={{ fontSize: "1.5rem" }}>Explore</h4>
          <ul>
            <li><a href='/study-material' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Study Material</a></li>
            <li><a href='/aptitude-test' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Aptitute</a></li>
            <li><a href='/resume' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Resume Scanner</a></li>
            <li><a href='/resume-builder' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Resume Builder</a></li>
            <li><a href='/mock-interview' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Mock Interview</a></li>
            <li><a href='/coding' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Coding Practise</a></li>
           
          </ul>
        </div>

        <div className="footer-section">
          <h4 style={{ fontSize: "1.5rem" }}>Help & Support</h4>
          <ul>
            <li><a href='/faq' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>FAQ's</a></li>
            <li><a href='/privacy-policy' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Privacy Policy</a></li>
            <li><a href='/t&c' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-sec">
            <h4 style={{ fontSize: "1.5rem", textAlign: "center" }}>Developer</h4>
            <ul className='ul'>
                <div className='creator'>
                  <a href="https://wa.me/7033239572" target="_blank" rel="noreferrer"><li>  <img src="nilesh.jpg" alt="Creator 1" className="creator-photo" /></li></a>
                  <Button style={{ color: "#fff", fontWeight: "bold" }}>Team Leader & Project Coordinator</Button>
                </div>

                <div className='creator' >
                  <a href="https://wa.me/6201567493" target="_blank" rel="noreferrer"><li>  <img src="nj.jpg" alt="Creator 2" className="creator-photo" /></li></a>
                  <Button style={{ color: "#fff", fontWeight: "bold" }}>Frontend Developer</Button>
                </div>
                <div className='creator'>
                  <a href="https://wa.me/91999991145" target="_blank" rel="noreferrer"><li>  <img src="pradeep.jpg" alt="Creator 3" className="creator-photo" /></li></a>
                  <Button style={{ color: "#fff", fontWeight: "bold", textWrap: "wrap" }}>Research, Content Specialist & UI/UX Designer</Button>
                </div>
            </ul>
        </div>


      </div>

      <div className="footer-bottom">
        <p>Interviewprep All Right Reserved, {new Date().getFullYear()}</p>
      </div>

      {/* creator photos */}
      <div className="floating-icons">
        <a href="https://wa.me/7033239572" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="WhatsApp" className="floating-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer
