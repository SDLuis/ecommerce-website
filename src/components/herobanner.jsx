export default function HeroBannerComponent ({ products }) {
  return (
    <div className='flex justify-center mt-5 sm:mt-10'>
      <div className='py-[100px] px-[30px] sm:px-[40px] bg-[#dcdcdc] md:rounded-2xl relative h-[500px] leading-[0.9] w-screen md:w-[90%]'>
        <p className='text-xl'>{products[0].smallText}</p>
        <h3 className='text-[4rem] ml-[-8px] sm:ml-0 mt-1'>{products[0].midText}</h3>
        <h1 className='text-white text-[10rem] ml-[-20px] uppercase'>{products[0].largeText}</h1>
        <img className='absolute top-0 right-0 lg:right-[20%] w-[450px] h-[450px]' src={products[0].img} alt='headphones' />
        <div>
          <button className='rounded-2xl py-[10px] px-[16px] bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer z-[10000]' type='button'>Shop {products[0].Product_Name}</button>
          <div className='absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-[#324d67]'>
            <h5 className='mb-3 font-bold text-base hidden md:block self-end'>Description</h5>
            <p className='text-[#5f5f5f] font-thin hidden md:block text-end'>{products[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
