/* eslint-disable camelcase */

export default function ProductsComponent ({ product: { img, Product_Name, price, Product_ID } }) {
  return (
    <div>
      <a href={`/products/${Product_ID}`}>
        <div className='cursor-pointer text-[#324d67] hover:scale-[1.1] transform transition ease-in-out duration-500'>
          <img
            alt='products'
            src={img}
            width={250}
            height={250}
            className='rounded-2xl bg-[#ebebeb] scale-[1,1] transform transition ease-in-out duration-500'
          />
          <p className='font-medium'>{Product_Name}</p>
          <p className='font-extrabold mt-[6px] text-black'>${price}</p>
        </div>
      </a>
    </div>
  )
}
