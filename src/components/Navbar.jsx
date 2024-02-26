import React from 'react'
import { Helmet } from 'react-helmet';
import Topheader from './Topheader';
import { NavLink, Link } from 'react-router-dom';

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
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">Tyre Site</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
            <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/blogs" className="nav-item nav-link" activeClassName="active">Blog</NavLink>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/services/mobile-tyre-fitting" className="dropdown-item">Mobile Tyre Fitting</Link>
                  <Link to="/services/mobile-tyre-repair" className="dropdown-item">Mobile Tyre Repair</Link>
                  <Link to="/services/tyre-replacement" className="dropdown-item">Tyre Replacement</Link>
                  <Link to="/services/flat-tyre" className="dropdown-item">Flat Tyre</Link>
                  <Link to="/services/burst-tyre" className="dropdown-item">Burst Tyre</Link>
                  <Link to="/services/part-worn-tyre" className="dropdown-item">Part Worn Tyre</Link>
                  <Link to="/services/jumpstart" className="dropdown-item">Jumpstart</Link>
                  <Link to="/services/locknut-wheel-removal" className="dropdown-item">Locknut Wheel Removal</Link>
                  <Link to="/services/mobile-breakdown" className="dropdown-item">Mobile Breakdown</Link>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
            </div>
          </div>
        </nav>
    </div>
 
    </>
  )
}

export default Navbar
