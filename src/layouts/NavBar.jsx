// Location
import { useLocation } from 'react-router-dom'

// Logo
import Logo from '../assets/AmazonPrimeVideoLogo.png'

const NavBar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <>
      {
        pathname !== '/' &&
        (
          <nav className='pt-10 dark:bg-gray-900 fixed w-full top-0 left-0'>
            <div className='flex items-center justify-between w-full px-10 md:px-10 lg:px-16 2xl:px-20'>
              <a href='' className='flex items-center'>
                <img src={Logo} className='mr-3 h-7 md:h-10' alt='AmazonPrimeVideoLogo' />
              </a>

              <form className='flex items-center ml-0 md:-ml-8 lg:-ml-11'>
                <label htmlFor='simple-search' className='sr-only'>
                  Search
                </label>
                <div className='relative w-44 md:w-64 lg:w-80 xl:w-96'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 sm:w-5 sm:h-5 text-gray-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='simple-search'
                    className='border border-gray-300 text-gray-200 text-sm rounded-tl-md rounded-bl-md w-full pl-10 py-2 sm:py-2.5 bg-transparent'
                    placeholder='Search'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='p-2.5 text-sm font-medium text-white bg-sky-700 border hover:bg-blue-700'
                >
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  <span className='sr-only'>Search</span>
                </button>
              </form>

              <div className='flex md:order-2'>
                <button
                  type='button'
                  className='text-white border font-semibold rounded-lg text-xs md:text-sm px-3 md:px-5 py-2 text-center'
                >
                  Logout
                </button>
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              <ul className='flex flex-row space-x-5 sm:space-x-5 md:space-x-5 lg:space-x-7 xl:space-x-10 text-base md:text-lg lg:text-xl font-medium'>
                <li className={pathname === '/home' ? 'border-b-2 pb-1 px-2' : ''}>
                  <a href='#' className={pathname !== '/home' ? 'text-slate-400' : 'text-white'}>
                    Home
                  </a>
                </li>
                <li className={pathname !== '/home' ? 'border-b-2 pb-1 px-2' : ''}>
                  <a href='#' className={pathname !== '/new-movie' ? 'text-slate-400' : 'text-white'}>
                    New Movie
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )
      }
    </>
  )
}

export default NavBar
