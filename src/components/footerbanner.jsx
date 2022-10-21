
export default function FooterBannerComponent ({ product }) {
  return (
    <div className='flex justify-center'>
      <div className='py-[100px] px-10 bg-[#f02d34] rounded-2xl relative h-[400px] leading-[1] text-white w-[90%] mt-[120px]'>
        <div className='flex justify-between'>
          <div className='left'>
            <p>20% OFF</p>
            <h3 className='font-black text-[80px] ml-[25px]'>{product[6].largeText}</h3>
            <h3 className='font-black text-[80px] ml-[25px]'>SMILE</h3>
            <p className='m-[18px]'>20 OCT to 7 DEC</p>
          </div>
          <div className='leading-[1.4] mt-[-40px] max-w-[400px]'>
            <p className='text-lg'>{product[6].smallText}</p>
            <h3 className='text-6xl font-extrabold'>{product[6].midText}</h3>
            <p className='text-lg text-justify'>{product[6].description}</p>
            <button className='rounded-[15px] py-[10px] px-[16px] bg-white text-red-600 border-none mt-10 text-lg font-medium cursor-pointer' type='button'>SHOP NOW</button>
          </div>

          <img
            src={product[6].img} className='absolute top-[-25%] left-[25%]'
          />
        </div>
      </div>
    </div>
  )
}
