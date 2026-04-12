/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Exams from "./Exams";
import ContactUs from "./ContactUs";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/exams" className="nav-link">Exams</Link>
            </li>
            <li class="nav-item">
              <Link to="/contactus" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
