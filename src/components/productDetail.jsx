import { useState } from 'react'
import { StarFill, Star, Minus, Plus } from '../components/icons/icons'
export default function ProductDetailsComponent ({ product }) {
  const [qty, setQty] = useState(1)
  return (
    <div>
      <div className='product-detail-container flex flex-wrap gap-10 m-7 sm:m-10 mt-6 sm:mt-[60px]'>
        <div>
          <div className='image-container'>
            <img src={product.img} className='product-detail-image rounded-[15px] bg-[#ebebeb] w-auto h-auto sm:w-[400px] sm:h-[400px] cursor-pointer transform-cpu duration-300 ease-in-out hover:bg-[#f02d34]' />
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1 className=''>{product.Product_Name}</h1>
          <div className='reviews text-[#f02d34] mt-[10px] flex gap-[5px] items-center'>
            <div className='flex gap-[5px] items-center'>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <p className='text-[#324d67] text-lg mt-0'>
              (20)
            </p>
          </div>
          <h4 className='mt-[10px] font-semibold text-lg'>Details: </h4>
          <p className='mt-[10px] md:max-w-md xl:max-w-3xl'>{product.description}</p>
          <p className='price font-bold text-[26px] mt-[30px] text-[#f02d34]'>${product.price}</p>
          <div className='quantity flex gap-5 mt-[10px] items-center'>
            <h3 className='font-semibold text-lg'>Quantity:</h3>
            <p className='quantity-desc border flex items-center border-solid border-gray-500 p-[6px]'>
              <span className='minus text-base cursor-pointer py-[6px] px-3 border-r border-r-gray-500 text-[#f02d34]' onClick={() => setQty(qty - 1)}><Minus /></span>
              <span className='num cursor-pointer py-[6px] px-3 border-r border-r-gray-500 text-xl'>{qty}</span>
              <span className='plus text-base cursor-pointer py-[6px] px-3 text-green-600' onClick={() => setQty(qty + 1)}><Plus /></span>
            </p>
          </div>
          <div className='buttons flex gap-3 justify-center sm:justify-start sm:gap-[30px]'>
            <button type='button' className='add-to-cart py-[10px] px-[20px] sm:px-[20px] sm:w-[200px] w-[140px] border border-solid border-[#f02d34] mt-10 text-[18px] font-medium bg-white text-[#f02d34] cursor-pointer scale-100 transform-cpu duration-500 ease-in-out hover:scale-[1.1]'>Add to Cart</button>
            <button type='button' className='buy-now sm:w-[200px] w-[140px] py-[10px] px-[20px] bg-[#f02d34] border-none mt-10 text-[18px] font-medium cursor-pointer scale-100 transform-cpu duration-500 ease-in-out hover:scale-[1.1] text-white'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
