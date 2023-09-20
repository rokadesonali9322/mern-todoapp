import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        'https://mern-todo-app-j3gp.onrender.com/api/auth/register',
        {
          name,
          email,
          password,
        },
      )

      toast.success('User Register Successfully')
      navigate('/login')
    } catch (err) {
      console.log(err)
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
              <h3 style={{ color: '#212121' }}>Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>

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

                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn w-100 "
                    value="Register"
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
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
