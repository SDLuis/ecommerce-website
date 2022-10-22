import { Instagram, Twitter } from './icons/icons'

export default function FooterComponent () {
  return (
    <div className='footer-container text-[#324d67] text-center mt-5 py-[30px] px-[10px] font-bold flex flex-col items-center justify-center gap-[10px]'>
      <p>2022 SDL Headphones All rights reserverd</p>
      <p className='icons text-3xl flex gap-[10px]'>
        <a className='cursor-pointer' href='https://www.instagram.com/louistejeda/' target='_blank' rel='noreferrer'>
          <Instagram />
        </a>
        <a className='cursor-pointer' href='https://twitter.com/LuisTej40532208' target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
      </p>
    </div>
  )
}
