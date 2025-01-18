import { Link } from 'react-router-dom';
// import Title from '../ui/title';

export default function AboutPage() {
  return (
    <section className='container mx-auto py-4 h-[82vh]'>
    
      <div className='grid grid-cols-5 gap-2 max-w-[1300px]'>


      <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src="https://avatars.githubusercontent.com/u/124718648?v=4"
              alt='Sajib'
            />
            <h5 className='mb-1 text-xl font-medium text-black text-center'>
              Nazrul Islam Sajib
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Full-Stack Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/sajib'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>
       
        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src='https://avatars.githubusercontent.com/u/108083254?v=4'
              alt='Parba'
            />
            <h5 className='mb-1 text-xl font-medium text-black text-center'>
              Parba Das Gupta
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Front-End Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/parba'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>

        


        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src="https://avatars.githubusercontent.com/u/108684295?v=4"
              alt='Rifat'
            />
            <h5 className='mb-1 text-xl font-medium text-black text-center'>
            Faisal Hoque Rifat
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
            Full-Stack Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/rifat'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>


        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src="https://avatars.githubusercontent.com/u/113531290?v=4"
              alt='Istiaque'
            />
            <h5 className='mb-1 text-xl font-medium text-black text-center'>
            Istiaque Ahmed
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Back-End Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/istiaque'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>


        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src="https://avatars.githubusercontent.com/u/113531290?v=4"
              alt='Miftah'
            />
            <h5 className='mb-1 text-xl font-medium text-black text-center'>
              Miftahul Islam
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Front-End Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/miftah'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}