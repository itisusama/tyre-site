import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import BlogPage from './blogs';
import ContactPage from './Contact';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}
export default App
