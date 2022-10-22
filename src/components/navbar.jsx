import { Cart } from './icons/icons'

export default function NavbarComponent () {
  return (
    <div className='navbar-container flex justify-between relative my-[6px] mx-[18px]'>
      <p className='logo text-gray-700 text-lg font-medium'>
        <a href='/'>SDL Headphones</a>
      </p>

      <button type='button' className='cart-icon text-gray-500 text-2xl relative border-none cursor-pointer bg-transparent transform-cpu ease-in-out duration-[400] hover:scale-[1.1]'>
        <Cart />
        <span className='cart-item-qty text-[#eee] bg-[#f02d34] absolute right-[-8px] top-0 text-xs w-[18px] h-[18px] rounded-full text-center font-semibold'>1</span>
      </button>
    </div>
  )
}
