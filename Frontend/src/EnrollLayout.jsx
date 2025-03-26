import { useState } from "react";
import "./EnrollLayout.css";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`} style={{ backgroundColor: title === "Core Java" || title === "Java 8 Features" || title === "Spring Boot Basics" || title === "MySQL Basics" ? "#dee2a0" : "inherit" }}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: "#dee2a0", color: "black" }}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

const contentData = {
  "Core Java": [
    {
      title: "Java Basics",
      article: "https://medium.com/edureka/java-tutorial-bbdd28a2acd7",
      youtube: "https://www.youtube.com/watch?v=eIrMbAQSU34",
      Practice: "https://www.w3resource.com/java-exercises/basic/index.php",
      note: "Learn the basics of Java including syntax, OOP principles, and basic operations."
    }
  ],
  "Java 8 Features": [
    {
      title: "Java 8 Features",
      article: "https://www.geeksforgeeks.org/java-8-features/",
      youtube: "https://www.youtube.com/watch?v=FnaGbZsT2qI",
      note: "Explore Java 8 features like Lambdas, Streams, and functional programming."
    }
  ],
  "Spring Boot Basics": [
    {
      title: "Spring Boot Introduction",
      article: "https://spring.io/guides/gs/spring-boot/",
      youtube: "https://www.youtube.com/watch?v=vtPkZShrvXQ",
      note: "Spring Boot simplifies Java development with auto-configuration and embedded servers."
    }
  ],
  "MySQL Basics": [
    {
      title: "MySQL Basics",
      article: "https://www.w3schools.com/mysql/",
      youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
      note: "Learn MySQL queries, database management, and relational database concepts."
    }
  ]
};

const MainContent = ({ selectedTopic }) => {
  const [entries, setEntries] = useState([]);
  const [notes, setNotes] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!selectedTopic) return <div className="main-content" style={{backgroundColor: "#dee2a0", color: "black" }}>Select a topic to view details.</div>;

  const addEntry = () => {
    setEntries([...entries, selectedTopic]);
  };

  const submitNote = () => {
    setShowPopup(false);
  };

  return (
    <div className="main-content" style={{backgroundColor: "#ffff", color: "black" }}>
      <h2>{selectedTopic?.title}</h2>

      <table className="topic-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Problem</th>
            <th>Article</th>
            <th>Video</th>
            <th>Practice</th>
            <th>Note</th>
            <th>Difficulty</th>
            <th>Revision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>{notes || "No problem added yet"}</td>
            <td>
              <a href={selectedTopic?.article} target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluency/48/document.png" alt="Article" />
              </a>
            </td>
            <td>
              <a href={selectedTopic?.youtube} target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluency/48/youtube-play.png" alt="Video" />
              </a>
            </td>
            <td>
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">GFG</a>
            </td>
            <td>
              <button onClick={() => setShowPopup(true)}>Add Note</button>
            </td>
            <td>
              <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </td>
            <td>
              <button className="start-btn">Start</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="add-btn" onClick={addEntry}>+ Add More</button>

      {showPopup && (
        <div className="popup">
          <textarea
            placeholder="Write your notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <button onClick={submitNote}>Submit</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

const EnrollLayout = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="app-container">
      <div className="accordion">
        {Object.keys(contentData).map((category) => (
          <AccordionItem key={category} title={category}>
            <ul>
              {contentData[category].map((item, index) => (
                <li key={index} onClick={() => setSelectedTopic(item)}>{item.title}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
      <MainContent selectedTopic={selectedTopic} />
    </div>
  );
};

export default EnrollLayout;
