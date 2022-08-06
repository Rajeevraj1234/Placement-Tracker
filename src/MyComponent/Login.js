import React, {useState} from 'react'
import "../login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Login = () => {
      axios.post("http://localhost:9002/Login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/LHome")
      })
  }
  return (
            <div className="login">
              <div className="container-fluid background1">
                <div className="row justify-content-center">
                  <div class="col-xl-3 col-lg-3" id="side-images1"></div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-8 col-9" id="ui1">
                    <div className="form">
                      <h2 className="text-center">Login Form</h2>
                      <br />
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <i className="bi bi-envelope-fill icon" />
                          <label htmlFor>Email/Phone no</label>
                          <input type="text number" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Enter your Email/Number" required />
                        </div>
                      </div>
                      <br />
                      <div className="row mb-3">
                        <div className="col-lg-12 col-md-12">
                          <i className="bi bi-lock-fill icon" />
                          <label htmlFor>Password</label>
                          <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Enter your Password" required />
                        </div>
                      </div>
                      <a className="link-dec" href>forgot password ?</a>
                      <br />
                      <div className="row mt-3">
                        <div className="col-lg-12 col-md-12">
                          <button type="submit" className="btn1 btn-block btn-lg"  onClick={Login}>Submit</button>
                        </div>
                      </div>
                      <p className="mt-4 fs-6">Not having accont ? <button className="link-dec signupbtn" onClick={() => navigate("/Signup")}> Click Here</button> to create one !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Login
