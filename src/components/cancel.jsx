
const Canceled = () => {
  return (
    <div className='grid place-items-center py-16 h-[65vh]'>
      <div className='w-full h-full py-10 bg-white dark:bg-gray-700'>
        <div className='canceled w-[92%] md:w-[1000px] h-[350px] m-auto p-4 md:p-[50px] rounded-[15px] flex justify-center items-center flex-col bg-red-900'>
          <h2 className='md:text-[40px] text-2xl capitalize mt-[15px] font-black text-gray-200'>Your order has been canceled</h2>
          <p className='email-msg text-lg font-semibold mt-5 text-center'>Your products will remain in your cart.</p>
          <p className='description text-base font-semibold text-center m-[10px] mt-[30px] ml-[5px] text-gray-200 '>
            If you have any questions, please email
            <a className='email ml-[5px] text-blue-400' href='mailto:order@example.com'>
              order@example.com
            </a>
          </p>
          <a href='/'>
            <button type='button' width='300px' className='btn w-full max-w-[400px] rounded-[15px] border-none py-[10px] px-6 md:px-20 text-xl mt-10 uppercase bg-blue-500 text-white cursor-pointer scale-[1,1] duration-500 transform ease-in-out hover:scale-[1.1]'>
              Continue Shopping
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Canceled
