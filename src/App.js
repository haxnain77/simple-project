import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
