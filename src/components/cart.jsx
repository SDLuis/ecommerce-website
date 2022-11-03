import { Bag, Delete, Minus, Plus, ArrowLeft, Save } from './icons/icons'
import '../styles/general.css'
import UseCart from '../hooks/useCart'

export default function CartComponet () {
  const { onRemove, cartItems, toggleCartItemQuanitity, totalPrice, setShowCart, editQty, handleCheckout } = UseCart()
  return (
    <div className='cart-wrapper w-screen bg-[#00000080] h-screen fixed right-0 top-0 bottom-0 z-[100] transition-all duration-1000 ease-in-out'>
      <div className='cart-container p-1 h-screen w-screen  md:w-[650px] dark:bg-gray-700 bg-white float-right relative py-0 px-0 sm:px-[10px]'>
        <button
          type='button'
          onClick={() => setShowCart(false)}
          className=' flex items-center mt-[35px] text-lg font-medium cursor-pointer gap-[2px] ml-[10px] border-none bg-transparent'
        > <ArrowLeft />
          <span className='heading text-xl dark:text-gray-200 ml-2'>Your Cart</span>
          <span className='text-xl ml-[15px] text-[#f02d34]'>{cartItems.length}</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart mt-10 font-semibold text-xl grid place-items-center'>
            <h3 className='m-5 dark:bg-gray-200'>Your shopping bag is empty</h3>
            <Bag />
            <a href='/'>
              <button
                type='button'
                className='btn w-full max-w-[400px] rounded-[15px] border-none py-[10px] px-[12px] text-xl mt-10 uppercase bg-[#f02d34] text-white cursor-pointer scale-[1,1] duration-500 transform ease-in-out hover:scale-[1.1]'
              >
                Continue Shopping
              </button>
            </a>
          </div>
        )}

        <div className='mt-[15px] overflow-auto scrollbar dark:scrollbarDark max-h-[66vh] py-5 px-[10px]'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product mb-6 flex gap-4 sm:gap-[30px] sm:p-5' key={item.Product_ID}>
              <img src={item.img} className='max-w-[112px] dark:bg-gray-800 h-28 sm:max-w-[150px] sm:h-[150px] rounded-[15px] bg-[#ebebeb] object-contain' />
              <div className='item-desc'>
                <div className='flex justify-between w-52 sm:w-[350px] text-[#324d67] top'>
                  <h5 className='font-medium text-base sm:text-2xl dark:text-gray-300'>{item.Product_Name}</h5>
                  <h4 className='sm:text-xl text-base dark:text-gray-100 text-black'>{(item.price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                  </h4>
                </div>
                <div className='flex justify-between w-52 sm:w-[350px] dark:text-gray-200 text-[#324d67] mt-[60px]'>
                  <div>
                    <p className='flex quantity-desc border mt-[-50px] sm:mt-0 border-solid border-gray-500'>
                      <button onClick={() => toggleCartItemQuanitity(item.Cart_ID, 'dec')} className='minus cursor-pointer text-[16px] py-[6px] px-[6px] sm:px-[12px] border-r border-r-gray-500 text-[#f02d34]'><Minus /></button>
                      <span className='num cursor-pointer text-[16px] py-[6px] px-[12px] border-r border-r-gray-500'>{item.quantity}</span>
                      <button onClick={() => toggleCartItemQuanitity(item.Cart_ID, 'inc')} className='plus cursor-pointer text-[16px] py-[6px] px-[6px] sm:px-[12px] text-red-600'><Plus /></button>
                    </p>
                  </div>
                  <button className='mt-[-52px] sm:mt-0' onClick={() => editQty(item.Cart_ID, item.quantity)}><Save /></button>
                  <button
                    type='button'
                    onClick={() => onRemove(item)}
                    className='remove-item text-2xl bg-transparent border-none text-[#f02d34] mt-[-50px] sm:mt-0 cursor-pointer'
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom absolute bottom-0 right-[5px] w-full py-[10px] px-[65px]'>
            <div className='total flex justify-between'>
              <h3 className='text-[22px] dark:text-gray-300'>Subtotal:</h3>
              <h3 className='text-[22px] dark:text-white'>{(totalPrice).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
              </h3>
            </div>
            <div className='m-auto w-[300px]'>
              <button type='button' onClick={handleCheckout} className='btn w-full max-w-[400px] rounded-[15px] border-none py-[10px] px-[12px] text-xl mt-10 uppercase bg-[#f02d34] text-white cursor-pointer scale-[1,1] duration-500 transform ease-in-out hover:scale-110'>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
