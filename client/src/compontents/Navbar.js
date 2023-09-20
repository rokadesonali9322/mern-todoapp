import axios from 'axios'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  // console.log(loggedIn)

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout')
      localStorage.removeItem('authToken')
      toast.success('logout successfully')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container-fluid">
      <div className="middleconent" style={{ textAlign: 'center' }}>
        <h3>Task Management App</h3>
        <div className="text-content">
          {loggedIn ? (
            <>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/login" onClick={handleLogout}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register"> Sign Up </NavLink>
              <NavLink to="/login"> Sign In </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
