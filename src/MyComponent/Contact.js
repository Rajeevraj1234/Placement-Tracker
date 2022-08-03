import React from 'react'
import "../contact.css";
import logo from '../images/logo1.png';

const contact = () => {
  return (
    <div>
      !-- .............section-1/header................ --&gt;
      <section className="contact">
        <div className="content">
          <h2 className="mt-5">Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cum soluta debitis perspiciatis nulla est
            provident officiis maiores! Enim corrupti </p>
        </div>
        {/* ....................section-2.................. */}
        <div className="container">
          <div className="contact-info">
            {/* ............address................. */}
            <div className="box">
              <div className="icon"><i className="bi bi-geo-alt-fill" /></div>
              <div className="text">
                <h3>Address</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, minus.</p>
              </div>
            </div>
            {/* .............phone no............. */}
            <div className="box">
              <div className="icon"><i className="bi bi-telephone" /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>8347897593784</p>
              </div>
            </div>
            {/* ................email................... */}
            <div className="box">
              <div className="icon"><i className="bi bi-envelope" /></div>
              <div className="text">
                <h3>Email</h3>
                <p>contact.ptrack22@gmaijl.com</p>
              </div>
            </div>
          </div>
          {/* ...........................form start........................ */}
          <div className="contact-form">
            <form>
              <h2><i className="bi bi-chat-left-dots-fill" /> &nbsp;&nbsp; Send Message</h2>
              <div className="inputbox">
                <input type="text" name required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input type="text" name required="required" />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <textarea required="required" defaultValue={""} />
                <span>Type your Message...</span>
              </div>
              <div className="inputbox">
                <input type="submit" name defaultValue="Send" id="btn" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contact
