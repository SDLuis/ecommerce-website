import Product from '../components/products'
import '../styles/general.css'

export default function MayLikeComponent ({ products }) {
  return (
    <div className='maylike-products-wrapper mt-[40px]'>
      <h2 className='text-center m-[30px] font-medium dark:text-gray-200 text-[28px] text-[#324d67] '>You may also like</h2>
      <div className='marquee relative w-[100%] h-[350px] overflow-x-hidden'>
        <div className='maylike-products-container flex justify-center gap-[15px] mt-[20px] track absolute whitespace-nowrap animate-marqueeMB sm:animate-marquee will-change-transform w-[500%] md:w-[280%] hover:pause'>
          {products.map((item) => (
            <Product key={item.Product_ID} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
