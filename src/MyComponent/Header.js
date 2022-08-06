import React from 'react'
import "../Placement-Tracker.css";
import logo from '../images/logo1.png';


export default function () {
  return ( 
          <div>
            <div id="home" />
            <nav className="navbar navbar-expand-lg bg-light" id="sticky">
              <div className="container-fluid">
                <a className="navbar-brand fs-3 " href="/"><img id='logo' src={logo} alt="P-Track" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active text-dark"  aria-current="page" href="/">HOME</a>
                    {/* <a className="nav-link text-dark" href="#about-sec">ABOUT</a> */}
                    <a className="nav-link text-dark" href="contact">CONTACT</a>
                    <a className="nav-link text-dark" href="questions">QUESTIONS</a>
                    <a className="nav-link text-light" id="nav-log-btn" href="login">LOGIN </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
    
  );
}
