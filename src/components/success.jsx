/* eslint-disable no-unused-expressions */
import { useEffect } from 'react'
import { ShoppingSucces } from '../components/icons/icons'
import { runFireworks } from '../lib/utils'
import UseCart from '../hooks/useCart'

const Success = ({ clear }) => {
  const { ClearCart, ownProductsInCart } = UseCart()
  useEffect(() => {
    clear === 'yes'
      ? ownProductsInCart().then((res) => {
        res.length ? ClearCart() : null
      })
      : null
    runFireworks()
  }, [])

  return (
    <div className='grid place-items-center h-[65vh] py-16'>
      <div className='w-full h-full py-10 bg-white dark:bg-gray-700'>
        <div className='success w-[92%] md:w-[1000px] h-[350px] m-auto p-4 md:px-[50px] rounded-[15px] flex justify-center items-center flex-col bg-[#dcdcdc]'>
          <p className='icon text-[40px]'>
            <ShoppingSucces />
          </p>
          <h2 className='md:text-[40px] text-2xl capitalize mt-[15px] font-black text-[#324d67]'>Thank you for your order!</h2>
          <p className='email-msg text-base font-semibold mt-5 text-center'>Check your email inbox for the receipt.</p>
          <p className='description text-base font-semibold text-center m-[10px] mt-[30px] ml-[5px] text-[#f02d34] '>
            If you have any questions, please email
            <a className='email ml-[5px] text-[#f02d34]' href='mailto:order@example.com'>
              order@example.com
            </a>
          </p>
          <a href='/'>
            <button type='button' width='300px' className='btn w-full max-w-[400px] rounded-[15px] border-none py-[10px] px-6 md:px-20 text-xl mt-10 uppercase bg-[#f02d34] text-white cursor-pointer scale-[1,1] duration-500 transform ease-in-out hover:scale-[1.1]'>
              Continue Shopping
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Success
