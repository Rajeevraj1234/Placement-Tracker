import React from 'react'
import "../Placement-Tracker.css";
  

const home = () => {
  return (
    <div className="container-fluid">
      {/*----------------------------- HEADER-START ----------------------------------*/}
      <header className="conatainer-fluid row justify-content-end" id="header-banner">
        <div className="col-xl-4 col-lg-5  text-light">
          <h1>PLACEMENT TRACKER</h1>
          <hr />
          <p>We help you to land on your DREAM job !! </p>
        </div>
      </header>
      {/*----------------------------- HEADER-END ----------------------------------*/}
      {/*-----------------------------section-2 (MNC's)----------------------------------*/}
      <div className="row justify-content-evenly" id="s2-main-div">
        <div className="col-xl-12 " id="s2-heading">
          <h1 className="text-center">OPEN SOURCE</h1>
        </div>
        <div className="col-xl-className" id="os-about">
          <h1 className="text-center">What Is Open Source</h1> <hr />
          <p className="text-center px-5">Open source is a term that originally referred to open source software (OSS). Open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit.Open source software is developed in a decentralized and collaborative way, relying on peer review and community production. Open source software is often cheaper, more flexible, and has more longevity than its proprietary peers because it is developed by communities rather than a single author or company.&nbsp; <a href="https://www.redhat.com/en/topics/open-source/what-is-open-source">Click for more !!</a></p>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card"  id="os-c-1">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a"> J-SCRIPT</a>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card"  id="os-c-2">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a"> C++</a>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card" id="os-c-3">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a"> JAVA</a>
          </div>
        </div>
        <div className="row justify-content-evenly">

          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card"  id="os-c-4">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a">DRUPAL</a>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card"  id="os-c-5">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a"> PHP</a>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 os-card" id="os-c-6">
            <a href="https://summerofcode.withgoogle.com/programs/2022/organizations" className="os-c-a"> REACT</a>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------section-2 END -------------------------------------------------------*/}


      {/* -----------------------------------------------section-3 START -------------------------------------------------------*/}
      <div className="row justify-content-center" id="s3-main-div">
        <div className="col-xl-12 " id="s3-heading">
          <h1 className="text-center">INTERVIEW QUESTIONs of companies</h1>
        </div>
        <div className="col-xl-6 col-lg-9 col-md-10 col-sm-10 col-10" id="s3-card-div">
          <div className="row justify-content-center">
            <div className="col-xl-12" id="s3-i-card" /><br />
            <div className="col-xl-12 ps-2">
              <h1>Interview Questions</h1>
              <p>One of the most important thing to land on a job is to clear an interview, here we'll help you to find some of th most important question asked by the interviewer of different companies </p>
              <a href="questions" id="s3-button"> GO ...</a>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------Review-section START -------------------------------------------------------*/}
      <div className="row conatainer-fluid justify-content-evenly">
        <div className="col-xl-12 " id="s2-heading">
          <h1 className="text-center">Review</h1>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-10 rev-div">
          <h4>rohan kpr. </h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in!</p>
          <span>
            <i className="bi bi-star-fill" /> {/* full star */}
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-half" />{/* half star */}
            <i className="bi bi-star" />  {/* empty star */}
          </span>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-10 rev-div">
          <h4> mayank ch. </h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in!</p>
          <span>
            <i className="bi bi-star-fill" /> {/* full star */}
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-half" />{/* half star */}
            <i className="bi bi-star" />  {/* empty star */}
          </span>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-10 rev-div">
          <h4>Nishant </h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in!</p>
          <span>
            <i className="bi bi-star-fill" /> {/* full star */}
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />  {/* empty star */}
          </span>
        </div>
      </div>
      {/* -----------------------------------------------Review-section END -------------------------------------------------------*/}

      {/* -----------------------------------------------ABOUT START -------------------------------------------------------*/}
      <div className="row ">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="about-sec">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12" id="about1-sec">
              <h1>About</h1> <hr />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aperiam quam eius, quod expedita esse odit omnis ratione odio unde. Fugiat maiores sint sapiente ut soluta rerum veritatis ratione nulla.</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12" id="about2-sec">
              <h1>Handles</h1><hr />
              <div className="mb-2"><i className="bi bi-instagram me-3" /><a href>placementTracke@instagram</a></div>
              <div className="mb-2"><i className="bi bi-twitter me-3" /><a href>placementTracker@twitter</a></div>
              <div className="mb-2"><i className="bi bi-linkedin me-3" /><a href>placementTracker@linkdin</a></div>
              <div className="mb-2"><i className="bi bi-github me-3" /><a href>placementTracker@github</a></div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------ABOUT END -------------------------------------------------------*/}

    </div>
  );
}


export default home
