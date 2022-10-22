export default function FooterBannerComponent ({ product }) {
  return (
    <div className='flex justify-center'>
      <div className='py-[100px] px-4 md:px-10 bg-[#f02d34] rounded-2xl relative h-[300px] sm:h-[400px] leading-[1] text-white w-[90%] mt-[120px]'>
        <div className='flex justify-between'>
          <div className='left md:w-auto w-44 md:h-48 h-44 flex flex-col sm:justify-between'>
            <p>20% OFF</p>
            <h3 className='font-black md:mt-4 text-3xl sm:text-[60px] lg:text-[80px] ml-0 lg:ml-[25px]'>{product[6].largeText}</h3>
            <h3 className='font-black md:mt-8  text-3xl sm:text-[60px] lg:text-[80px] ml-0 lg:ml-[25px]'>SMILE</h3>
            <p className='text-sm md:mt-8'>20 OCT to 7 DEC</p>
          </div>
          <div className='leading-[1.4] mt-[-40px] mr-[-40px] md:mr-0 w-64 md:w-auto md:max-w-[250px] lg:max-w-[400px]'>
            <p className='text-lg'>{product[6].smallText}</p>
            <h3 className='lg:text-6xl md:text-4xl text-3xl font-extrabold'>{product[6].midText}</h3>
            <p className='text-lg text-justify hidden md:block'>{product[6].description}</p>
            <a href={`/products/${product[6].Product_ID}`}>
              <button className='rounded-[15px] mt-10 absolute lg:right-[20%] right-5 sm:ml-0 py-[10px] px-[10px] md:px-[40px] bg-white text-red-600 border-none lg:mt-10 text-lg font-medium cursor-pointer' type='button'>SHOP NOW</button>
            </a>
          </div>

          <img
            src={product[6].img} alt='headphones' className='absolute w-[270px] sm:w-auto sm:h-auto object-contain max-h-[490px] h-[250px] top-0 sm:top-[-23%] left-[10%] sm:left-[15%] lg:left-[25%]'
          />
        </div>
      </div>
    </div>
  )
}
