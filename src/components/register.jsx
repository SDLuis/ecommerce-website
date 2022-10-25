import React from 'react'

export default function RegisterComponent () {
  return (
    <div className='Login mb-[-30px] grid h-[80vh] place-items-center'>
      <main className='w-full h-[80vh] bg-white dark:bg-gray-800 sm:rounded-lg sm:w-[451px] sm:h-[75vh] '>
        <div className='formulario w-full grid place-items-center h-full'>
          <center>
            <h2 className='font-medium text-2xl dark:text-gray-200 mb-[-40px]'>Register</h2>
          </center>
          <div className='w-10/12'>
            <div className='grid gap-6 mb-4 w-full grid-cols-2'>
              <div>
                <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>First name</label>
                <input type='text' id='first_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Louis' required />
              </div>
              <div>
                <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Last name</label>
                <input type='text' id='last_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Rincon' required />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email address</label>
              <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='example@company.com' required />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password</label>
              <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
            </div>
          </div>
          <div className='w-full mt-[-80px] sm:mt-[-30px] flex justify-center'>
            <button
              className='Button mt-[-55px] sm:mt-[-40px] mb-1 focus:outline-none  bg-blue-800 py-2 text-gray-300 px-10 rounded-md w-10/12'
              variant='success'
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                // login()
              }}
            >
              Register
            </button>
          </div>
          <div>
            <p className='login-card-footer-text dark:text-gray-200 mt-[-140px] sm:mt-[-60px] mb-[10px] text-lg'>
              Don't have an account?{' '}
              <a href='/login' className='text-reset border-b text-gray-300'>
                Log in here
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
