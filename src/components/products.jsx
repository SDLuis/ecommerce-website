/* eslint-disable camelcase */

export default function ProductsComponent ({ product: { img, Product_Name, price, Product_ID } }) {
  return (
    <div>
      <a href={`/products/${Product_ID}`}>
        <div className='cursor-pointer dark:text-gray-200 text-[#324d67] hover:scale-[1.1] transform transition ease-in-out duration-500'>
          <img
            alt='products'
            src={img}
            width={250}
            className='rounded-2xl dark:bg-[#2A2A2A] h-[250px] object-contain bg-[#ebebeb] scale-[1,1] transform ease-in-out duration-500'
          />
          <p className='font-medium'>{Product_Name}</p>
          <p className='font-bold tracking-wide mt-[6px] dark:text-white text-black'>{(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
          </p>
        </div>
      </a>
    </div>
  )
}
