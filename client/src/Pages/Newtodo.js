import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  // states
  const [error, setError] = useState('')
  const [getTaskData, setTaskData] = useState({
    title: '',
    des: '',
  })

  const { title, des } = getTaskData
  const OnInputChange = (e) => {
    setTaskData({ ...getTaskData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        'https://mern-todapp-backend.onrender.com/api/todo/todos',
        {
          title,
          des,
        },
      )
      toast.success('Task added Successfully')

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
              <h4 style={{ color: '#212121' }}>Add New Task</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="Enter the Task"
                    name="title"
                    value={title}
                    // onChange={handleTitleChange}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>

                {/* <!-- Password Field --> */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter the task description"
                    name="des"
                    value={des}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn w-100 "
                    value="Add "
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
