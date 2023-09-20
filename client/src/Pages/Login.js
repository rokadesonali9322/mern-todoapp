import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  // states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleconfirmPasswordChange = (e) => {
    setconfirmPassword(e.target.value)
  }

  //Login ctrl
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        'https://mern-todapp-backend.onrender.com/api/auth/login',
        {
          email,
          password,
          confirmpassword,
        },
      )
      toast.success('Login Successfully')
      localStorage.setItem('authToken', true)
      navigate('/home')
    } catch (err) {
      console.log(error)

      setTimeout(() => {
        setError('')
      }, 1000)
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 style={{ color: '#212121' }}>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* <!-- Email Field --> */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>

                {/* <!-- Password Field --> */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                {/* confirm password */}
                <div className="form-group">
                  <label htmlFor="confirmnpassword">Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmnpassword"
                    placeholder="Enter your confirm password"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={handleconfirmPasswordChange}
                    required
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn w-100 "
                    value="Login"
                    style={{
                      textAlign: 'left',
                      marginTop: '5px',
                      backgroundColor: '#60bf70',
                      color: '#fff',
                      fontSize: '1.1rem',
                    }}
                  />
                </div>
              </form>
              <p>
                Already have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
