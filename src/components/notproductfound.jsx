import { useState, useEffect } from 'react'
export default function NotProductsFoundComponent ({ message, redMessage, homeMessage }) {
  const gifsErrors = [
    'd2jjuAZzDSVLZ5kI',
    'hv5AEBpH3ZyNoRnABG',
    'hLwSzlKN8Fi6I'
  ]

  const randomImage = () => {
    return `https://media.giphy.com/media/${
        gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
      }/giphy.gif`
  }
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) return null
  return (
    <div className='cont-NotFound h-[70vh] grid place-items-center '>
      <div className='errorNotFound grid place-items-center text-center'>
        <label className='code-errorNF text-black dark:text-gray-200 text-4xl font-bold'>Not products found</label>
        <br />
        <label className='msg-errorNF mb-5 text-black dark:text-gray-200 text-xl'>
          {message}
        </label>
        <img className='img-error w-[90%] sm:w-[400px] h-auto' src={randomImage()} alt='alt-page-404' />
        <a href='/admin/addproduct' className='px-8 py-2 mt-2 rounded-md bg-black text-gray-200' hidden={!redMessage}>{redMessage}</a>
        <a href='/' className='px-8 py-2 rounded-md bg-black text-gray-200' hidden={!homeMessage}>{homeMessage}</a>
      </div>
    </div>
  )
}
