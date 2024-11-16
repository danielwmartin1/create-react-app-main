import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import '../App.css';
import Contact from './Contact';
// eslint-disable-next-line
import Projects from './Projects';
import Form from './Form';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
