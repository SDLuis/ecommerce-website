import { useState, useEffect } from 'react'

import { getProduct } from '../services/products.service'

export default function UseProducts () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProduct().then((response) => {
      setProducts(response)
    })
  }, [])
  return { products }
}
