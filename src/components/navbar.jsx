import { Cart } from './icons/icons'
import CartComponet from './cart'
import UseProducts from '../hooks/useCart'

export default function NavbarComponent () {
  const { products, showCart, setShowCart, totalPrice } = UseProducts({ product: [] })
  return (
    <div className='navbar-container flex justify-between relative my-[6px] mx-[18px]'>
      <p className='logo text-gray-700 text-lg font-medium'>
        <a href='/'>SDL Headphones</a>
      </p>

      <button type='button' onClick={() => setShowCart(true)} className='cart-icon text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
        <Cart />
        <span className='cart-item-qty text-[#eee] bg-[#f02d34] absolute right-[-8px] top-0 text-xs w-[18px] h-[18px] rounded-full text-center font-semibold'>{products.length}</span>
      </button>
      {showCart && <CartComponet cartItems={products} setShowCart={setShowCart} totalPrice={totalPrice} />}
    </div>
  )
}
