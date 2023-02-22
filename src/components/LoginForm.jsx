// Assets
import Logo from '../assets/AmazonPrimeVideoLogo.png'

const LoginForm = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <div
        className='flex items-center mb-10'
      >
        <img
          className='w-full h-10 sm:h-14'
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='sm:w-80 md:w-80 lg:w-96 bg-white rounded-lg'>
        <div className='p-6 space-y-6'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center'>
            Sign-in
          </h1>
          <form className='space-y-4 md:space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                E-mail or phone number
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-200 border border-gray-200 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='bg-gray-200 border border-gray-200 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full text-white bg-amber-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
