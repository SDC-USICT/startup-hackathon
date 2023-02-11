import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/dashboard";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// <<<<<<< HEAD

import Team from "./Components/Team";
import ScrollOnTop from "./Components/scrollOnTop";
import Announcement from "./Components/announcement";
// import Timeline from "./Components/Timeline";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollOnTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcement" element={<Announcement />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
