// Components
import MovieCard from '../components/MovieCard'
import NotFound from '../components/NotFound'

// Zustand
import searchedMoviesContainer from '../config/SearchedMovies'

const SearchedMovies = () => {
  const searchedMovies = searchedMoviesContainer((state) => state.searchedMovies.searchedMovies)

  return (
    <div className='flex justify-center flex-wrap gap-y-5 xs:gap-y-7 sm:gap-y-5 gap-x-6 2xl:gap-x-4 mb-8 mt-40 2xl:mt-44 xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 xl:px-6 2xl:px-0'>
      {
      searchedMovies.length > 0
        ? searchedMovies.map((data) => (
          <MovieCard key={data._id} data={data} />
        ))
        : <NotFound />
    }
    </div>
  )
}

export default SearchedMovies
