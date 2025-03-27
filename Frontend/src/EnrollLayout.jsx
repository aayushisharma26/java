import { useState } from "react";
import "./EnrollLayout.css";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`} style={{ backgroundColor: title === "Core Java" || title === "Java 8 Features" || title === "Spring Boot Basics" || title === "MySQL Basics" ? "#dee2a0" : "inherit" }}>
      <div className="accordion-titles" onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: "hsl(44, 87%, 94%)", color: "black" }}>
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
      "title": "Java Introduction",
      "article": "https://www.javatpoint.com/java-introduction",
      "youtube": "https://www.youtube.com/watch?v=Hl-zzrqQoSE",
      "Practice": "https://www.programiz.com/java-programming/online-compiler",
      "note": "Introduction to Java, its features, and why it is widely used."
    },
    {
      "title": "Java Basics",
      "article": "https://medium.com/edureka/java-tutorial-bbdd28a2acd7",
      "youtube": "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "Practice": "https://www.w3resource.com/java-exercises/basic/index.php",
      "note": "Learn the basics of Java including syntax, OOP principles, and basic operations."
    },
    {
      "title": "Data Types and Variables",
      "article": "https://www.geeksforgeeks.org/data-types-in-java/",
      "youtube": "https://www.youtube.com/watch?v=fIQ9eqmZ2p0",
      "Practice": "https://www.w3resource.com/java-exercises/basic/index.php",
      "note": "Understanding primitive and non-primitive data types, variables, and type casting."
    },
    {
      "title": "Operators in Java",
      "article": "https://www.javatpoint.com/operators-in-java",
      "youtube": "https://www.youtube.com/watch?v=HfVS2rWO1kA",
      "Practice": "https://www.programiz.com/java-programming/operators",
      "note": "Learn different operators like arithmetic, relational, logical, and bitwise."
    },
    {
      "title": "Control Statements",
      "article": "https://www.geeksforgeeks.org/control-flow-statements-in-java/",
      "youtube": "https://www.youtube.com/watch?v=9bSDoUfs1yg",
      "Practice": "https://www.w3resource.com/java-exercises/conditional-statements/index.php",
      "note": "Understanding loops, conditional statements, and switch cases in Java."
    },
    {
      "title": "Functions and Methods",
      "article": "https://www.javatpoint.com/methods-in-java",
      "youtube": "https://www.youtube.com/watch?v=YDN-JWgwFmk",
      "Practice": "https://www.programiz.com/java-programming/methods",
      "note": "Learn about user-defined functions, built-in methods, and method overloading."
    },
    {
      "title": "Object-Oriented Programming",
      "article": "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      "youtube": "https://www.youtube.com/watch?v=f9E8f-32v5c",
      "Practice": "https://www.w3resource.com/java-exercises/oop/index.php",
      "note": "Understanding OOP concepts like classes, objects, inheritance, polymorphism, and abstraction."
    }
  ]
  ,
  "Java 8 Features": [
    {
      "title": "Introduction to Java 8",
      "article": "https://www.javatpoint.com/java-8-features",
      "youtube": "https://www.youtube.com/watch?v=tWrR7A2Cpvo",
      "note": "Overview of Java 8 and its improvements over previous versions."
    },
    {
      "title": "Lambdas and Functional Interfaces",
      "article": "https://www.geeksforgeeks.org/lambda-expressions-java-8/",
      "youtube": "https://www.youtube.com/watch?v=1OpAgZvYXLQ",
      "note": "Understanding lambda expressions and functional interfaces in Java 8."
    },
    {
      "title": "Streams API",
      "article": "https://www.javatpoint.com/java-8-stream",
      "youtube": "https://www.youtube.com/watch?v=t1-YZ6bF-g0",
      "note": "Learn about the Streams API for processing collections efficiently."
    },
    {
      "title": "Default and Static Methods in Interfaces",
      "article": "https://www.geeksforgeeks.org/default-methods-java/",
      "youtube": "https://www.youtube.com/watch?v=5HHJ4JbcMOY",
      "note": "Explore default and static methods in interfaces and their usage."
    },
    {
      "title": "Optional Class",
      "article": "https://www.javatpoint.com/java-8-optional",
      "youtube": "https://www.youtube.com/watch?v=j9eKhDMIbAY",
      "note": "Understanding Optional to handle null values safely in Java 8."
    },
    {
      "title": "Date and Time API",
      "article": "https://www.geeksforgeeks.org/java-8-date-time-api/",
      "youtube": "https://www.youtube.com/watch?v=mtcKlB1Y8Mg",
      "note": "Learn about the new Date and Time API introduced in Java 8."
    }
  ]
  ,
  "Spring Boot Basics": [
    {
      "title": "Spring Boot Introduction",
      "article": "https://spring.io/guides/gs/spring-boot/",
      "youtube": "https://www.youtube.com/watch?v=vtPkZShrvXQ",
      "note": "Spring Boot simplifies Java development with auto-configuration and embedded servers."
    },
    {
      "title": "Spring Boot Annotations",
      "article": "https://www.geeksforgeeks.org/spring-boot-annotations/",
      "youtube": "https://www.youtube.com/watch?v=5PkJGEjPnpk",
      "note": "Learn about different Spring Boot annotations and their usage."
    },
    {
      "title": "Spring Boot REST API",
      "article": "https://www.javatpoint.com/spring-boot-rest-example",
      "youtube": "https://www.youtube.com/watch?v=K5A2k8E1nZs",
      "note": "Learn how to build RESTful APIs using Spring Boot."
    },
    {
      "title": "Spring Boot with MySQL",
      "article": "https://www.geeksforgeeks.org/spring-boot-mysql/",
      "youtube": "https://www.youtube.com/watch?v=ZDBzdD_y1Dc",
      "note": "Learn how to integrate MySQL with Spring Boot applications."
    },
    {
      "title": "Spring Boot Security",
      "article": "https://www.javatpoint.com/spring-boot-security",
      "youtube": "https://www.youtube.com/watch?v=9GOWj5h6bpE",
      "note": "Understand authentication and authorization in Spring Boot using Spring Security."
    },
    {
      "title": "Spring Boot Microservices",
      "article": "https://www.geeksforgeeks.org/introduction-to-microservices/",
      "youtube": "https://www.youtube.com/watch?v=6j9b9pQXVvA",
      "note": "Learn the basics of building microservices with Spring Boot."
    }
  ]
  ,
  "MySQL Basics": [
    {
      "title": "MySQL Basics",
      "article": "https://www.w3schools.com/mysql/",
      "youtube": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
      "note": "Learn MySQL queries, database management, and relational database concepts."
    },
    {
      "title": "MySQL Installation & Setup",
      "article": "https://dev.mysql.com/doc/refman/8.0/en/installing.html",
      "youtube": "https://www.youtube.com/watch?v=WuBcTJnIuzo",
      "note": "Step-by-step guide on installing and setting up MySQL on different platforms."
    },
    {
      "title": "MySQL Joins",
      "article": "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/",
      "youtube": "https://www.youtube.com/watch?v=V0pGz5nKCoI",
      "note": "Learn different types of SQL joins and how to use them effectively."
    },
    {
      "title": "MySQL Stored Procedures",
      "article": "https://www.javatpoint.com/mysql-procedure",
      "youtube": "https://www.youtube.com/watch?v=BBvgZz2Y9pE",
      "note": "Understand how to create and use stored procedures in MySQL."
    },
    {
      "title": "MySQL Indexing",
      "article": "https://www.geeksforgeeks.org/indexing-in-databases-set-1/",
      "youtube": "https://www.youtube.com/watch?v=odG6oNklzYA",
      "note": "Learn about indexing in MySQL and how it improves query performance."
    },
    {
      "title": "MySQL Transactions",
      "article": "https://www.mysqltutorial.org/mysql-transaction.aspx",
      "youtube": "https://www.youtube.com/watch?v=y-x-TcPneQc",
      "note": "Understand MySQL transactions and how to maintain data integrity."
    }
  ]

};

const MainContent = ({ selectedTopic }) => {
  const [entries, setEntries] = useState([]);
  const [notes, setNotes] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!selectedTopic) return <div className="main-content" style={{ backgroundColor: "hsl(44, 87%, 94%)", color: "black" }}>Select a topic to view details.</div>;

  const addEntry = () => {
    setEntries([...entries, selectedTopic]);
  };

  const submitNote = () => {
    setShowPopup(false);
  };

  return (
    <div className="main-content" style={{ backgroundColor: "#ffff", color: "black" }}>
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
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a>
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
              <a href="https://www.tutorialspoint.com/java/java_quick_guide.htm" target="_blank" rel="noopener noreferrer" className="start-btn">
                Revision
              </a>
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

