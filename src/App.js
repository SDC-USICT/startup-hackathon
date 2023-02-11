import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/dashboard";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// <<<<<<< HEAD
import Team from "./Components/Team";
// =======
// import ScrollOnTop from "./Components/scrollOnTop";
// >>>>>>> a781dc865e881ab7e6cc3b85658414cc0dafd3d4

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <ScrollOnTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
