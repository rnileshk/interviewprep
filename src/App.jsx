import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

/* pages*/
import StudyMaterial from './components/Pages/StudyMaterial';
import Resume from './components/Pages/Resume';
import MockInterview from './components/Pages/MockInterview';
import TermsCondition from './components/TermsCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import Faq from './components/Faq';
import Services from './components/Services';

/* courses */
import Dsa from './components/Course/Dsa/Dsa';
import TopicPage from './components/Course/Dsa/TopicPage';
import ProblemPage from './components/Course/Dsa/ProblemPage';

import Dbms from './components/Course/Dbm/Dbms';
import DbmsTopicPage from './components/Course/Dbm/DbmsTopicPage';

import OS from './components/Course/OperatingS/OS';
import OsTopicPage from './components/Course/OperatingS/OsTopicPage';


import ComputerN from './components/Course/ComputerNetwork/ComputerN';
import CNTopicPage from './components/Course/ComputerNetwork/CNTopicPage';

import AiMl from './components/Course/AI/AiMl';
import MlTopicPage from './components/Course/AI/MlTopicPage';

import WebDev from './components/Course/WebDev/WebDev';
import WebTopicPage from './components/Course/WebDev/WebTopicPage';


import ResumeHome from './components/Resume/Builder/ResumeHome';

/*Aptitude */

import Aptitude from './components/Apptitude/Aptitude';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


/*  Coding  */
import Coding from './components/Pages/Coding';
import CodingPage from './components/Coding/CodingPage';
import InterviewPage from './components/Coding/InterviewPage';
import StartInterview from './components/Coding/StartInterview';
import Dashboard from './components/Resume/Builder/Dashboard';
import EditResume from './components/Resume/Builder/EditResume';
import ViewResume from './components/Resume/Builder/ViewResume';


function App() {

  return (
    <>
    <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/study-material' element={<StudyMaterial />} />

          {/* DSA */}
          <Route path='/study-material/dsa' element={<Dsa />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/problem/:id" element={<ProblemPage />} />

          {/*Dbms */}
          <Route path='/study-material/dbms' element={<Dbms />} />
          <Route path='/study-material/dbms/topic/:id' element={<DbmsTopicPage />} />

          {/* OS */}
          <Route path='/study-material/os' element={<OS />} />
          <Route path='/study-material/os/topic/:id' element={<OsTopicPage />} />

          {/* Computer Network */}
          <Route path='/study-material/computer-network' element={<ComputerN />} />
          <Route path='/study-material/computer-network/topic/:id' element={<CNTopicPage />} />

          {/* Web Dev */}
          <Route path='/study-material/web-dev' element={<WebDev />} />
          <Route path='/study-material/web-dev/topic/:id' element={<WebTopicPage />} />

          {/* Machine Learning */}
          <Route path='/study-material/machine-learning' element={<AiMl />} />
          <Route path='/study-material/machine-learning/topic/:id' element={<MlTopicPage />} />

          {/* Artificial Intelligence */}

          {/*Resume-related */}
          <Route path='/resume-builder' element={<ResumeHome />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/dashboard/resume/:resumeId/edit" element={<EditResume />} />
          <Route path='/my-resume/:resumeId/view' element={<ViewResume />} />

          {/* Mock Interview */}

          <Route path='/mock-interview' element={<MockInterview />} />

          {/* Pages */ }
          <Route path='/t&c' element={<TermsCondition />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/service' element={<Services />} />
          
          <Route path='/aptitude-test' element={<Aptitude />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/coding' element={<Coding />} />
          <Route path='/coding/start' element={<CodingPage />} />
           <Route path="/coding/:interviewId" element={<InterviewPage />} />
           <Route path="/coding/:interviewId/start" element={<StartInterview />} />
        </Routes>
        <ToastContainer 
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
