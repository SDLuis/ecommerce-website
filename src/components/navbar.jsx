/* eslint-disable react/jsx-closing-tag-location */
import { Cart, Login, Logout } from './icons/icons'
import CartComponet from './cart'
import UseCart from '../hooks/useCart'
import UseUser from '../hooks/useUser'
import { useEffect, useState } from 'react'

export default function NavbarComponent () {
  const { cartItems, showCart, setShowCart } = UseCart({ product: [] })
  const { isLogged, logout, isAdmin } = UseUser()
  const [rendered, setRendered] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])

  function adminPanel () {
    if (isAdmin) {
      return (
        <>
          <div className='relative inline-block text-left'>
            <div>
              <button type='button' onClick={() => setDropDown(!dropDown)} className='inline-flex w-full justify-center hover:bg-gray-200 rounded-md border bg-white dark:bg-gray-700 dark:text-gray-200 px-2 md:px-4 py-1 text-sm font-medium text-gray-700 shadow-sm dark:hover:bg-gray-800 focus:outline-none' id='menu-button' aria-expanded='true' aria-haspopup='true'>
                Admin Panel
                <svg className='-mr-1 ml-0 md:ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clipRule='evenodd' />
                </svg>
              </button>
            </div>
            <div className={`absolute ${dropDown ? 'block' : 'hidden'} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex='-1'>
              <div className='py-1' role='none'>
                <a href='/admin/myproducts' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-0'>My products</a>
                <a href='/admin/addproduct' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-1'>Add product</a>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  function userBarButton () {
    if (isLogged) {
      return (
        <><button type='button' onClick={() => setShowCart(true)} className='cart-icon text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent scale-100 transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
          <Cart />
          <span className='cart-item-qty text-[#eee] bg-[#f02d34] absolute right-[-8px] top-0 text-xs w-[18px] h-[18px] rounded-full text-center font-semibold'>{cartItems.length}</span>
        </button>
          <button onClick={() => logout()} className='text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent scale-100 transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
            <Logout />
          </button></>
      )
    } else {
      return (
        <a href='/login'>
          <p className='text-transparent fixed'>
            .
          </p>
          <Login />
        </a>
      )
    }
  }
  return (
    <div className='navbar-container mt-1 flex justify-between relative py-[6px] mx-[18px]'>
      <div className='logo flex dark:text-gray-200 text-gray-700 text-lg font-medium'>
        <a className='mr-10 text-[17px] md:text-2xl' href='/'>SDL Headphones</a>
        <div>
          {rendered ? adminPanel() : null}
        </div>
      </div>
      <div className='flex gap-3 md:gap-7'>
        {rendered ? userBarButton() : null}
      </div>
      {showCart && <CartComponet />}
    </div>
  )
}
