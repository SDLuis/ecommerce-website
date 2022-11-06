import { Instagram, Twitter } from './icons/icons'

export default function FooterComponent ({ marginTop = 'mt-0' }) {
  return (
    <div className={`footer-container text-[#324d67] dark:text-gray-200 text-center sm:mt-10 xl:mt-16 py-[30px] px-[10px] ${marginTop} font-bold flex flex-col items-center justify-center gap-[10px]`}>
      <p>2022 SDL Headphones All rights reserverd</p>
      <p className='icons text-3xl flex gap-[10px] mt-[-40px]'>
        <a className='cursor-pointer text-white  dark:text-gray-700' href='https://www.instagram.com/louistejeda/' target='_blank' rel='noreferrer'>
          .
          <Instagram />
        </a>
        <a className='cursor-pointer text-white dark:text-gray-700' href='https://twitter.com/LuisTej40532208' target='_blank' rel='noreferrer'>
          .
          <Twitter />
        </a>
      </p>
    </div>
  )
}
