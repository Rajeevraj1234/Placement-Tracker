import React, { useRef } from 'react'
import "../contact.css";
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef();
  // const sendEmail = () => {};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f6d3c1f', 'template_45bn2sg', form.current, 'iXmgvD_YP8-Lv3PU0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()

    alert('Your Message has been submit Successfull ')
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <h2><i className="bi bi-chat-left-dots-fill" /> &nbsp;&nbsp; Send Message</h2>
              <div className="inputbox">
                <input type="text" name='user_name' required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input type="text" name='user_email' required="required" />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <textarea required="required" name='message' defaultValue={""} />
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

export default Contact
