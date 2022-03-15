import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/thor_apps_png_1.webp';

function Header() {
  return (
    <div className="m-logo">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid my-3">
          <Link to='/' className="navbar-brand text-center">
            <img src={logo} alt='logo' />
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <ul className="navbar-nav">
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/' className="navbar-brand text-center">
                    Online
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/on-premise' className="navbar-brand text-center">
                    On-Premise
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/pricing' className="navbar-brand text-center">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/case-studies' className="navbar-brand text-center">
                    Case Studies
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/support' className="navbar-brand text-center">
                    Support
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/faq' className="navbar-brand text-center">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/supportpolicy' className="navbar-brand text-center nav-text">
                    Support Policy
                  </Link>
                </li>
                <li className="nav-item nav-link mr-4 m-b-3">
                  <Link to='/' className="navbar-brand text-center">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;