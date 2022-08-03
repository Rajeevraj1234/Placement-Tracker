import React from 'react'
import "../sign up-form.css";


function Signup() {
  return (
            <div>
              <div className="container-fluid background">
                <div className="row justify-content-evenly mt-5 ">
                  <div class="col-xl-4 col-lg-4" id="side-images"></div>
                  <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-10" id="ui">
                    <form action="/sign_up" method="POST" className="form">
                      <h2 className="text-center">SIGN UP FORM</h2>
                      <br />
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-person-fill icon" />
                          <label htmlFor>First Name</label>
                          <input type="text" name="fname" className="form-control" placeholder="Enter your first name" required />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-person-fill icon" />
                          <label htmlFor>Last Name</label>
                          <input type="text" name="lname" className="form-control" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-envelope-fill icon" />
                          <label htmlFor>Email</label>
                          <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-phone" />
                          <label htmlFor>Phone no</label>
                          <input type="number" name="num" className="form-control" placeholder="Enter your number" required />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-lock-fill icon" />
                          <label htmlFor>Password</label>
                          <input type="password" name="password" className="form-control" placeholder="Enter your password" id="pass" required />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <i className="bi bi-lock-fill icon" />
                          <label htmlFor>Confirm Password</label>
                          <input type="password" name="password" className="form-control" placeholder="re-type your password" id="c-pass" required />
                          <p className=" mt-3 mb-0" id="pass-para" />
                        </div>
                      </div>
                      <br />
                      <div className="mb-3 col-lg-12 mb-4">
                        <label htmlFor="formFile" className="form-label mb-3">Add Your CV</label>
                        <input className="form-control" type="file" id="formFile" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12  col-sm-12 col-12">
                          <label htmlFor className="me-5">Gender:</label>
                          <input type="radio" className="radio-btn" name="gender" id="male" required />
                          <label htmlFor="male" style={{marginRight: '30px'}}>Male</label>
                          <input type="radio" className="radio-btn" name="gender" id="female" required />
                          <label htmlFor="female">Female</label>
                          <input type="radio" className="radio-btn ms-3" name="gender" id="other" required />
                          <label htmlFor="other">Other</label>
                        </div>
                        {/* .....................cv button........................... */}
                      </div>
                      <br />
                      {/* <div className="row">
                        <select className="state" required>
                          <option>Select a State</option>
                          <option>BIHAR</option>
                          <option>JHARKHAND</option>
                          <option>DELHI</option>
                          <option>BANGALORE</option>
                          <option>WEST BENGAL </option>
                          <option>PUNJAB</option>
                          <option>HARYANA</option>
                          <option>KERALA</option>
                        </select>
                      </div> */}
                      <br />
                      <div className="row">
                        <div className>
                          <input type="checkbox" className="checkbox-btn" required />
                          <label htmlFor="checkbox-btn" className="checkbox-content">I accept the <a href="#" id="tc">terms &amp;
                              conditions</a></label>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className>
                          <button onmouseover="onhover()" type="submit" className="btn btn-block btn-lg">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div></div>

  )
}

export default Signup
