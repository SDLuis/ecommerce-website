import HeroBannerComponent from './herobanner'
import UseProducts from '../hooks/useProducts'
import ProductsComponent from './products'
import FooterBannerComponent from './footerbanner'

export default function Home () {
  const { products } = UseProducts()
  return (
    <div>
      {products.length !== 0 ? <HeroBannerComponent products={products.length && products} /> : null}
      <div className='text-center my-10 mx-0'>
        <h2 className='text-[40px] font-extrabold'>Best Seller Products</h2>
        <p className='text-base font-extralight'>speaker There are many variations passages</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-5 w-full'>
        {products?.map((product) => <ProductsComponent key={product.Product_ID} product={product} />)}
      </div>
      {products.length !== 0 ? <FooterBannerComponent product={products} /> : null}
    </div>
  )
}
