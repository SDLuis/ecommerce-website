import { useState, useEffect } from 'react'

import { getProductInCart } from '../services/products.service'

export default function UseProducts () {
  const [showCart, setShowCart] = useState(false)
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    getProductInCart().then((response) => {
      setProducts(response)
      setTotalPrice(response.reduce((sum, value) => (typeof value.price === 'number' ? (sum + value.price * value.quantity) : sum), 0))
    })
  }, [])
  return { showCart, setShowCart, products, totalPrice }
}
