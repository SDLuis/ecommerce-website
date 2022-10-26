import UseUser from '../hooks/useUser'
import { useEffect } from 'react'
import ProviderLayout from '../layouts/provider.layout'

export default function LoginComponent () {
  const { login, isLogged, setUseremail, setPassword } = UseUser()

  useEffect(() => {
    setTimeout(() => {
      if (isLogged) {
        window.location.href = '/'
      }
    }, 1000)
  }, [isLogged])

  return (
    <ProviderLayout>
      <div className='Login grid mb-[-40px] h-[80vh] sm:h-[75vh] place-items-center'>
        <main className='w-full h-[80vh] bg-white dark:bg-gray-800 sm:rounded-lg sm:w-[451px] sm:h-[70vh] '>
          <div className='formulario w-full grid place-items-center h-full'>
            <center>
              <h2 className='font-medium text-2xl dark:text-gray-200 mb-[0px]'>Welcome to SDL Headphones</h2>
            </center>
            <div className='w-9/12'>
              <div className='mb-4'>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email address</label>
                <input type='email' id='email' onChange={(e) => { setUseremail(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='example@company.com' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password</label>
                <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
              </div>
            </div>
            <div className='w-full mt-[-80px] flex justify-center'>
              <button
                className='Button mt-[-50px] sm:mt-8 mb-14 focus:outline-none  bg-blue-800 py-2 text-gray-300 px-10 rounded-md w-9/12'
                variant='success'
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  login()
                }}
              >
                Log In
              </button>
            </div>
            <div>
              <p className='login-card-footer-text dark:text-gray-200 sm:mt-[-80px] mt-[-180px] text-lg'>
                Don't have an account?{' '}
                <a href='/register' className='text-reset border-b text-gray-300'>
                  Register here
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </ProviderLayout>
  )
}
