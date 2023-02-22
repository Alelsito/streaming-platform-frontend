// React
import { useEffect } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Zustand
import userContainer from '../config/UserStore'

const Home = () => {
  const navigate = useNavigate()
  const getAuthorization = userContainer((state) => state.isAuthorized)
  const isAuthorized = getAuthorization.isAuthorized

  useEffect(() => {
    if (isAuthorized !== true) { return navigate('/') }
  }, [])

  return (
    <div />
  )
}

export default Home
