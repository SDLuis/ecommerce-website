import HeroBannerComponent from './herobanner'
import UseProducts from '../hooks/useProducts'
import ProductsComponent from './products'
import FooterBannerComponent from './footerbanner'
import ProviderLayout from '../layouts/provider.layout'

export default function Home ({ product }) {
  const { products } = UseProducts({ product })

  return (
    <ProviderLayout>
      <div>
        <HeroBannerComponent products={products} />
        <div className='text-center my-10 mx-0'>
          <h2 className='text-[40px] font-extrabold dark:text-gray-200'>Best Seller Products</h2>
          <p className='text-base font-extralight dark:text-gray-200'>speaker There are many variations passages</p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-5 w-full'>
          {products?.map((product) => <ProductsComponent key={product.Product_ID} product={product} />)}
        </div>
        <FooterBannerComponent product={products} />
      </div>
    </ProviderLayout>
  )
}
