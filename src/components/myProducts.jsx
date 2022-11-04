import UseProducts from '../hooks/useProducts'
import NotProductsFoundComponent from './notproductfound'
import UseUser from '../hooks/useUser'
import { Remove, Edit } from './icons/icons'
import { useEffect } from 'react'

export default function MyProducts () {
  const { myProducts, loading, deleteProduct } = UseProducts({})
  const { isLogged, isAdmin } = UseUser()

  useEffect(() => {
    if (!isLogged || !isAdmin) window.location.href = '/'
  }, [])
  if (loading && myProducts.length === 0) return <div className='grid h-screen place-items-center'> <div className='text-5xl font-extrabold'>Loading products...</div></div>
  if (!isAdmin) return
  if (loading === false && myProducts.length === 0) {
    return (
      <NotProductsFoundComponent
        message='You dont have any product yet'
        redMessage='Add products'
      />
    )
  }

  return (
    <div className='h-screen grid place-items-center'>
      <p className='text-gray-400 text-4xl font-bold'>My Products</p>
      <div className='h-[80%] w-[80%] mt-[-50px] flex flex-col gap-8 rounded-md overflow-y-auto scrollbar dark:scrollbarDark bg-white dark:bg-gray-800'>
        {myProducts.map((product) => {
          return (
            <div key={product.Product_ID} className='h-[280px] p-5 flex bg-gray-900 text-black relative dark:text-gray-200'>
              <img className='w-[250px] h-[250px]' src={`${product.img}`} />
              <div className='grid grid-cols-1'>
                <div className='grid grid-cols-4 gap-5'>
                  <div>
                    <p className='text-gray-400'>Product Name</p>
                    <p className='text-xl'>{product.Product_Name}</p>
                  </div>
                  <div>
                    <p className='text-gray-400'>Quantity</p>
                    <p className='text-xl'>{product.quantity}</p>
                  </div>
                  <div>
                    <p className='text-gray-400'>Price</p>
                    <p className='text-xl'>{product.price}</p>
                  </div>
                  <div className='absolute right-5 top-7 text-center'>
                    <a href={`/admin/editproduct/${product.Product_ID}`}>
                      <button className='ml-5'> <Edit /></button>
                    </a>
                    <button onClick={() => deleteProduct(product.Product_ID, product)} href='/' className='ml-5'> <Remove /></button>
                  </div>
                </div>
                <div className='grid grid-cols-1'>
                  <p className='text-gray-400'>Descripcion</p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
