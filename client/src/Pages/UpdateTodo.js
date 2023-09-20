import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const UpdateTodo = () => {
  // states

  const [error, setError] = useState('')
  const [getTaskData, setTaskData] = useState({
    title: '',
    des: '',
  })

  // get id
  const { todoId } = useParams()
  const navigate = useNavigate()

  const { title, des } = getTaskData
  const OnInputChange = (e) => {
    setTaskData({ ...getTaskData, [e.target.name]: e.target.value })
  }

  // get the todo id
  useEffect(() => {
    loadtodo()
  }, [])
  const loadtodo = async () => {
    try {
      const result = await axios.get(
        `https://mern-todapp-backend.onrender.com/api/todo/todos/${todoId}`,
      )
      console.log(result.data)
      setTaskData(result.data[0])
    } catch (err) {
      console.log(err)
    }
  }
  //upadte ctrl
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.put(
        `https://mern-todapp-backend.onrender.com/api/todo/todos/${todoId}`,
        getTaskData,
      )
      console.log(result.data)
      setTaskData(result.data)
      toast.success('Update task Successfully')
      navigate('/home')
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
              <h4 style={{ color: '#212121' }}>Update the Task</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Task"
                    name="title"
                    value={title}
                    onChange={(e) => OnInputChange(e)}
                    required
                  />
                </div>

                {/* <!-- Password Field --> */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>

                  <input
                    type="text"
                    placeholder="Enter  the task description"
                    className="form-control"
                    name="des"
                    value={des}
                    onChange={(e) => OnInputChange(e)}
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn w-100 "
                    value="update"
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

export default UpdateTodo
