import { useEffect } from 'react'
import Login from './pages/Login'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Details from './pages/Details'
import Signup from './pages/Signup'
import { UserProvider } from './context/UserContext'

const ProtectedRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user ? children : <Navigate to='/login' />
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user && location.pathname !== '/signup') {
      navigate('/login')
    }
  }, [navigate])

  return (
    <UserProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/details' element={<ProtectedRoute><Details /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  )
}

export default App
