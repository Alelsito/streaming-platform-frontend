import React from 'react'

const MovieCard = ({ data }) => {
  const date = new Date(data.dateOfReleased).toLocaleDateString()

  return (
    <div className='max-w-sm max-h-10 shadow xs:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-44'>
      <div className='group relative bg-black rounded-md'>
        <img
          alt={data.title}
          src={data.image}
          className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md'
        />
        <div className='relative p-4 2xl:p-6'>
          <p className='xs:text-sm 2xl:text-sm font-bold uppercase -tracking-normal text-cyan-600'>
            Movie
          </p>
          <p className='xs:text-lg 2xl:text-xl font-bold text-white'>
            {data.title}
          </p>
          <div className='flex justify-start space-x-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mt-2'>
            <p className='xs:text-sm 2xl:text-base font-medium text-white'>
              {date}
            </p>
            <div className='flex space-x-1'>
              <p className='xs:text-sm 2xl:text-base font-medium text-white'>
                {data.likes}
              </p>
              <svg
                className='text-white pb-1 xs:w-5 xs:h-6 2xl:w-6 2xl:h-7'
                viewBox='0 0 26 27'
                stroke='currentColor'
                fill='none'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3' />
              </svg>
            </div>
          </div>
          <div className='w-80 h-18 pt-2'>
            <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='xs:text-sm text-white'>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
