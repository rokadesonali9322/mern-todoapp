import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './compontents/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Newtodo from './Pages/Newtodo'
import UpdateTodo from './Pages/UpdateTodo'

function App() {
  const currentpath = window.location.pathname
  const validateRoute = ['/home', '/register', '/newtodo', '/updatetodo']
  return (
    <>
      {validateRoute.includes(currentpath) && <Navbar />}
      <Toaster />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newtodo" element={<Newtodo />} />
        <Route path="/updatetodo/:todoId" element={<UpdateTodo />} />
        <Route
          path="*"
          element={<h1 className="NotfoundAddress">Address not found</h1>}
        />
      </Routes>
    </>
  )
}

export default App
