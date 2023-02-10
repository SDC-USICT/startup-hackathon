import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/dashboard";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import ScrollOnTop from "./Components/scrollOnTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollOnTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
