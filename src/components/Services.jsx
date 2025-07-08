import React from "react";
import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  // Embedded routing-like data for services
  const services = [
        {
        title: "Study Material",
        description:
        "Comprehensive and curated study resources for competitive exams, interviews, and academic success.",
        icon: "📚",
        url: "/study-material",
        },
        {
            title: "Aptitude Practice",
            description:
            "Sharpen your logical reasoning, quantitative, and verbal skills with extensive aptitude practice sets.",
            icon: "🧠",
            url: "/aptitude-test",
        },
        {
            title: "Resume Building",
            description:
            "Build a professional, clean, and impactful resume from scratch with our guided tools.",
            icon: "📄",
            url: "/resume-builder",
        },
        {
            title: "Resume Analysis",
            description:
            "Get personalized feedback and actionable insights to improve your resume for better job prospects.",
            icon: "🔍",
            url: "/resume",
        },
        {
            title: "Mock Interview",
            description:
            "Practice real interview scenarios with experts and receive constructive feedback to boost confidence.",
            icon: "🎤",
            url: "/mock-interview",
        },
        {
            title: "Coding Practice",
            description:
            "Solve coding problems with real-time evaluation and improve your data structures & algorithms skills.",
            icon: "💻",
            url: "/coding",
        },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.url)}
            style={{ cursor: "pointer" }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
