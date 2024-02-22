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
import { Helmet } from 'react-helmet';
import MobileTyreFitting from './MobileTyreFitting';
import MobileTyreRepair from './MobileTyreRepair';

const App = () => {

  return (
    <>
    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/mobile-tyre-fitting" element={<MobileTyreFitting/>} />
        <Route path="/mobile-tyre-repair" element={<MobileTyreRepair/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}
export default App
