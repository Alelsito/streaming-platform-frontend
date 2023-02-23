// Components
import MovieCard from '../components/MovieCard'
import NotFound from '../components/NotFound'

// Zustand
import searchedMoviesContainer from '../config/SearchedMovies'

const SearchedMovies = () => {
  const searchedMovies = searchedMoviesContainer((state) => state.searchedMovies.searchedMovies)

  return (
    <div className='flex xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 justify-center flex-wrap gap-x-7 lg:gap-y-3 xl:gap-y-2'>
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
