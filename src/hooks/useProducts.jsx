import { useState, useEffect } from 'react'
import { getProduct, ownProducts } from '../services/products.service'
import UseUser from './useUser'
export default function UseProducts ({ product }) {
  const { isLogged } = UseUser()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState(product)
  const [myProducts, setMyProducts] = useState([])
  useEffect(() => {
    getProduct().then((response) => {
      setProducts(response)
    })
    if (isLogged) {
      ownProducts().then((response) => {
        setMyProducts(response)
        setLoading(false)
      })
    }
  }, [])
  return { products, myProducts, loading }
}
