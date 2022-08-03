import React from 'react'
import "../login.css";
import logo from '../images/logo1.png';

function Login() {
  return (
            <div>
              <div className="container-fluid background1">
                <div className="row justify-content-center">
                  <div class="col-xl-3 col-lg-3" id="side-images1"></div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-8 col-9" id="ui1">
                    <form action className="form">
                      <h2 className="text-center">Login Form</h2>
                      <br />
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <i className="bi bi-envelope-fill icon" />
                          <label htmlFor>Email/Phone no</label>
                          <input type="text number" name="userlogin" className="form-control" placeholder="Enter your Email/Number" required />
                        </div>
                      </div>
                      <br />
                      <div className="row mb-3">
                        <div className="col-lg-12 col-md-12">
                          <i className="bi bi-lock-fill icon" />
                          <label htmlFor>Password</label>
                          <input type="password" name="password" className="form-control" placeholder="Enter your Password" required />
                        </div>
                      </div>
                      <a className="link-dec" href>forgot password ?</a>
                      <br />
                      <div className="row mt-3">
                        <div className="col-lg-12 col-md-12">
                          <button type="submit" className="btn1 btn-block btn-lg">Submit</button>
                        </div>
                      </div>
                      <p className="mt-4 fs-6">Not having accont ? <a className="link-dec" href="signup">Click Here </a>
                         to create one !</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Login
