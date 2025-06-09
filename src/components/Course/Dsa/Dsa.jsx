import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "Arrays"},
  { id: 2, name: "String"},
  { id: 3, name: "Linked List"},
  { id: 4, name: "Stacks and Queues"},
  { id: 5, name: "Hashing"},
  { id: 6, name: "Trees"},
  { id: 7, name: "Graphs"},
  { id: 8, name: "Sorting Algorithms"},
  { id: 9, name: "Greedy Algorithms"},
  { id: 10, name: "Dynamic Programming"},
];

const Dsa = () => {

  const navigate = useNavigate();
  
  const handleStart = (id) => {
    navigate(`/topic/${id}`);
  };
  
  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Data Structures and Algorithms</h1>
        <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/dsa.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
            <h2>Course Overview</h2>
            <p>
            This course is designed to take you on a transformative journey from mastering Data Structures and Algorithms (DSA) to becoming a proficient developer. Whether you aspire to become a full-stack developer or specialize in a specific technology stack, this course provides the essential building blocks for your coding journey starting right from basic programming to building applications.
            </p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
            <h2>About The Course</h2>
            <p>
            This journey starts with a solid foundation in Data Structures and Algorithms (DSA), essential for becoming a skilled developer. Whether you are aiming to master full-stack development, specialize in Java backend, dive into applied data science, or create the next big Android app, this curriculum arms you with the essential tools and real-world experience to fuel your coding journey. Whether you're a student or a professional, this curriculum provides the key fundamentals and practical skills needed to thrive in todays tech landscape.
            </p>
            <ul>
              <li>Starts with a solid understanding of Data Structures and Algorithms (DSA).</li>
              <li>Leads towards becoming a skilled developer.</li>
              <li>Equips with fundamental tools for the coding journey.</li>
              <li>Suitable for aspiring full-stack developers or those specializing in a particular technology stack.</li>
              <li>Perfect for students or professionals from any field aiming for a technological journey.</li>
            </ul>
        </div>
        <img src="/dsa.png" alt="dsa" className="dsa-images" />
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <div style={{ maxWidth: "950px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", padding: "2rem", color: "#222" }}>DATA STRUCTURE AND ALGORITHMS</h2>
            <div style={{ border: "1px solid #222", borderRadius: "10px", padding: "1rem", width: "80%" }}>
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    margin: "0.5rem 0",
                    background: "#f9f9f9",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                    <img src="/dsa.jpg" alt="" style={{ width: "50px", height: "50px" }} />
                    <div>
                      <h3 style={{ marginBottom: "0.5rem" }}>{topic.name}</h3>
                      <p>
                        <FaVideo /> {topic.videos} Videos &nbsp;
                        <FaBook /> {topic.articles} Articles &nbsp;
                        {/*<FaCode /> {topic.problems} Problems*/}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleStart(topic.id)}
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      padding: "0.4rem 1rem",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Dsa
