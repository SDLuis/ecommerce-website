/* eslint-disable react/jsx-closing-tag-location */
import { Cart, Login, Logout } from './icons/icons'
import CartComponet from './cart'
import UseProducts from '../hooks/useCart'
import UseUser from '../hooks/useUser'

export default function NavbarComponent () {
  const { products, showCart, setShowCart, totalPrice } = UseProducts({ product: [] })
  const { isLogged, logout } = UseUser()
  return (
    <div className='navbar-container flex justify-between relative py-[6px] mx-[18px]'>
      <p className='logo dark:text-gray-200 text-gray-700 text-lg font-medium'>
        <a href='/'>SDL Headphones</a>
      </p>
      <div className='flex gap-7'>

        {
        isLogged
          ? <><button type='button' onClick={() => setShowCart(true)} className='cart-icon text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
            <Cart />
            <span className='cart-item-qty text-[#eee] bg-[#f02d34] absolute right-[-8px] top-0 text-xs w-[18px] h-[18px] rounded-full text-center font-semibold'>{products.length}</span>
          </button>
            <button onClick={() => logout()} className='text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
              <Logout />
            </button></>
          : (
            <a href='/login'>
              <Login />
            </a>)
        }
      </div>
      {showCart && <CartComponet cartItems={products} setShowCart={setShowCart} totalPrice={totalPrice} />}
    </div>
  )
}
