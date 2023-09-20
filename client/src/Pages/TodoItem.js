import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import axios from 'axios'
import toast from 'react-hot-toast'

function TodoItem({ getTask }) {
  console.log(getTask)
  console.log(getTask.title)
  const [completed, setCompleted] = useState(false)

  const deleteUser = async (todoId) => {
    // console.log(todoId)
    try {
      const deletedata = await axios.delete(
        `https://mern-todapp-backend.onrender.com/api/todo/todos/${todoId}`,
      )
      console.log(deletedata)
      toast.error('Task deleted sucessfully')
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  const handleCheckboxChange = () => {
    setCompleted(!completed)
  }

  return (
    <tr>
      <td className="styletd">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>{getTask.title}</td>
      <td>{getTask.des}</td>
      <td>
        {completed ? (
          <button
            className="btn btn-primary"
            style={{
              width: '6.3rem',
            }}
          >
            Complete
          </button>
        ) : (
          <button
            className="btn btn-danger"
            style={{
              width: '6.3rem',
            }}
          >
            Incomplete
          </button>
        )}
      </td>
      <td>
        {' '}
        <Link to={`/updatetodo/${getTask._id}`}>
          <MdModeEdit size={30} color="blue" />{' '}
        </Link>
      </td>
      <td>
        <Link onClick={() => deleteUser(getTask._id)}>
          <MdDelete size={30} color="red" />
        </Link>
      </td>
    </tr>
  )
}

export default TodoItem
