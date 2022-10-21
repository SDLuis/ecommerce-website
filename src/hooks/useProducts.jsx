import { useState, useEffect } from 'react'

import { getProduct } from '../services/products.service'

export default function UseProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProduct().then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])
  return { products, setProducts, loading }
}
