import "../../css/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const openTopic = (topic) => {
    navigate("/LearningReact", { state: { topic } });
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/About">About</Link></li>

        {/* Learning React Dropdown */}
        <li className="dropdown">
          <Link to="/LearningReact" className="dropbtn">
            Learning React ▾
          </Link>

          <ul className="dropdown-content">
            <li onClick={() => openTopic("props")}>Props</li>
            <li onClick={() => openTopic("task")}>Task</li>
            <li onClick={() => openTopic("state")}>State</li>
            <li onClick={() => openTopic("events")}>Events</li>
          </ul>
        </li>

        {/* Hooks Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Hooks ▾</span>

          <ul className="dropdown-content">
            <li onClick={() => openTopic("usestate")}>useState</li>
            <li onClick={() => openTopic("useeffect")}>useEffect</li>
            <li onClick={() => openTopic("useeffectapi")}>useEffect API</li>
            <li onClick={() => openTopic("useref")}>useRef</li>
            <li onClick={() => openTopic("fakeapi")}>Fake Image API</li>
            <li onClick={() => openTopic("usememo")}>useMemo</li>
            <li onClick={() => openTopic("usecallback")}>useCallback</li>
          </ul>
        </li>

        <li><Link to="/Contact">Contact</Link></li>

        <li><Link to="/Login">Login</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
