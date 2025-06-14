import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import useFaceDetection from './useFaceDetection';
import useTabSwitchDetection from './useTabSwitchDetection';
import useQuestionTimer from './useQuestionTimer';
import ResultBlock from './ResultBlock';
import questions from './Questions';
import { FaCamera } from 'react-icons/fa';

const Aptitude = () => {
  const webcamRef = useRef(null);
  const [liveAlert, setLiveAlert] = useState('');
  const [logs, setLogs] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentCategory, setCurrentCategory] = useState(questions[0].category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cameraAllowed, setCameraAllowed] = useState(true); // ✅ Track permission

  const categories = [...new Set(questions.map(q => q.category))];

  // ✅ Check for camera access
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setCameraAllowed(true))
      .catch(() => setCameraAllowed(false));
  }, []);

  const logSuspiciousActivity = (type) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, { type, timestamp }]);
    setLiveAlert(type);
    setTimeout(() => setLiveAlert(''), 4000);
  };

  const saveAnswer = (index, selected) => {
    const current = questions[index];
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[index] = {
        question: current.question,
        selected: selected || 'Skipped',
        correct: current.answer,
        isCorrect: selected === current.answer,
      };
      return updated;
    });
  };

  const handleNext = () => {
    saveAnswer(questionIndex, selectedOption);
    const nextIndex = questionIndex + 1;
    setQuestionIndex(nextIndex);
    setCurrentCategory(questions[nextIndex]?.category || currentCategory);
    setSelectedOption(userAnswers[nextIndex]?.selected || '');
  };

  const handlePrevious = () => {
    if (questionIndex === 0) return;
    saveAnswer(questionIndex, selectedOption);
    const prevIndex = questionIndex - 1;
    setQuestionIndex(prevIndex);
    setCurrentCategory(questions[prevIndex]?.category || currentCategory);
    setSelectedOption(userAnswers[prevIndex]?.selected || '');
  };

  const handleSubmit = () => {
    saveAnswer(questionIndex, selectedOption);
    setSubmitted(true);
  };

  const jumpToCategory = (category) => {
    const index = questions.findIndex(q => q.category === category);
    if (index !== -1) {
      setQuestionIndex(index);
      setCurrentCategory(category);
      setSelectedOption(userAnswers[index]?.selected || '');
    }
  };

  const timeLeft = useQuestionTimer(submitted ? 0 : 1500, () => {
    if (!submitted) handleSubmit();
  });

  useFaceDetection(webcamRef, logSuspiciousActivity);
  useTabSwitchDetection(logSuspiciousActivity);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="aptitude-container">
      {/* Sidebar Toggle Icon */}
      {!isSidebarOpen && !submitted && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 1000,
            marginTop: '4rem',
            fontSize: '1.5rem',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '2px 10px',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      {!submitted && isSidebarOpen && (
        <div className="sidebar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Categories</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              style={{
                fontSize: '1.2rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
              }}
              title="Close Sidebar"
            >
              ×
            </button>
          </div>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`sidebar-button ${currentCategory === cat ? 'active' : ''}`}
              onClick={() => jumpToCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <h1 className="test-title" style={{ textAlign: "center" }}>Aptitude Test</h1>
        {!submitted && <p className="timer">Time Left: {formatTime(timeLeft)}</p>}

        {/* ✅ Webcam Preview OR Camera Blocked Icon */}
        {!submitted && (
          cameraAllowed ? (
            <Webcam ref={webcamRef} className="webcam-preview" />
          ) : (
            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#888', marginBottom: '1rem' }}>
              <FaCamera title="Camera access is blocked" />
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Camera access denied</p>
            </div>
          )
        )}

        {liveAlert && <div className="live-alert">{liveAlert}</div>}

        {!submitted ? (
          <div className="question-block">
            <h2>Question {questionIndex + 1} of {questions.length}</h2>
            <p className="text-gray-600 text-sm mb-2">
              Topic: {questions[questionIndex].category}
            </p>
            <div className="mb-4">{questions[questionIndex].question}</div>
            <div className="options-grid">
              {questions[questionIndex].options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-button ${selectedOption === opt ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
              {questionIndex > 0 && (
                <button className="next-button" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {questionIndex < questions.length - 1 ? (
                <button className="next-button" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
          <ResultBlock userAnswers={userAnswers} logs={logs} questions={questions} />
        )}
      </div>
    </div>
  );
};

export default Aptitude;
