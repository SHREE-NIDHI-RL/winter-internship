import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/FunctionalComponent/Navbar.jsx";
import Home from "./components/FunctionalComponent/Home.jsx";
import About from "./components/FunctionalComponent/About.jsx";
import Contact from "./components/FunctionalComponent/Contact.jsx";
import LearningReact from "./components/FunctionalComponent/LearningReact.jsx";
import Login from "./components/FunctionalComponent/Login.jsx";
import Signup from "./components/FunctionalComponent/Signup.jsx";
import './css/App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learningReact" element={<LearningReact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}



export default App;