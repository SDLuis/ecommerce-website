import ProviderLayout from '../layouts/provider.layout'
import ProductDetail from './productDetail'
import MayLikeComponent from './maylike'
export default function PageProductDetails ({ product, products }) {
  return (
    <div>
      <ProviderLayout>
        <ProductDetail product={product} />
        <MayLikeComponent products={products} />
      </ProviderLayout>
    </div>
  )
}
