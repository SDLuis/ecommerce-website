/* eslint-disable react/jsx-closing-tag-location */
import { Cart, Login, Logout } from './icons/icons'
import CartComponet from './cart'
import UseCart from '../hooks/useCart'
import UseUser from '../hooks/useUser'
import { useEffect, useState } from 'react'

export default function NavbarComponent () {
  const { cartItems, showCart, setShowCart } = UseCart({ product: [] })
  const { isLogged, logout } = UseUser()
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])

  function userBarButton () {
    if (isLogged) {
      return (
        <><button type='button' onClick={() => setShowCart(true)} className='cart-icon text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
          <Cart />
          <span className='cart-item-qty text-[#eee] bg-[#f02d34] absolute right-[-8px] top-0 text-xs w-[18px] h-[18px] rounded-full text-center font-semibold'>{cartItems.length}</span>
        </button>
          <button onClick={() => logout()} className='text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
            <Logout />
          </button></>
      )
    } else {
      return (
        <a href='/login'>
          <Login />
        </a>
      )
    }
  }
  return (
    <div className='navbar-container mt-1 flex justify-between relative py-[6px] mx-[18px]'>
      <p className='logo dark:text-gray-200 text-gray-700 text-lg font-medium'>
        <a href='/'>SDL Headphones</a>
      </p>
      <div className='flex gap-7'>
        {rendered ? userBarButton() : null}
      </div>
      {showCart && <CartComponet />}
    </div>
  )
}
