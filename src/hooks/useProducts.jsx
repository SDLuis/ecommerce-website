import { getProduct } from '../services/products.service'
const product = await getProduct()

export default function UseProducts () {
  return { product }
}
