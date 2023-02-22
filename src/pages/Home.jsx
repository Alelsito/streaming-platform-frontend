// React
import { useEffect } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Zustand
import userContainer from '../config/UserStore'

// Components
import MovieCard from '../components/MovieCard'

const Home = () => {
  const navigate = useNavigate()
  const getAuthorization = userContainer((state) => state.isAuthorized)
  const isAuthorized = getAuthorization.isAuthorized

  useEffect(() => {
    if (isAuthorized !== true) {
      return navigate('/')
    }
  }, [])

  return (
    <div className='flex xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 justify-center flex-wrap gap-x-7 lg:gap-y-3 xl:gap-y-2'>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default Home
