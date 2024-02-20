import React from 'react'
import { Helmet } from 'react-helmet';
import Topheader from './Topheader';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    </Helmet>
    
    <Topheader/>

       <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-2 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="m-0">Tyre Site</h1>
            {/* <img src="img/logo.png" alt="Logo" /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/blog" className="nav-item nav-link">Blog</Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                <div className="dropdown-menu m-0">
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                  <Link to="#" className="dropdown-item">Service</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="" className="btn btn-success rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
          </div>
        </nav>
    </div>
 
    </>
  )
}

export default Navbar
