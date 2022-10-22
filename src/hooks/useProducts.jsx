import { useState, useEffect } from 'react'

import { getProduct } from '../services/products.service'

export default function UseProducts ({ product }) {
  const [products, setProducts] = useState(product)
  useEffect(() => {
    getProduct().then((response) => {
      setProducts(response)
    })
  }, [])
  return { products }
}
