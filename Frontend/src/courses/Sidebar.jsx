import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul>
        <li>📌 DSA Sheets</li>
        <li>🛠 System Design</li>
        <li>🎥 Striver's DSA Playlist</li>
        <li>📂 SDE Core Sheets</li>
        <li>🔖 Saved Notes</li>
      </ul>
    </div>
  );
};

export default Sidebar;
