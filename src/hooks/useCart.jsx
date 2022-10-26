import { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { ownProductsInCart } from '../services/products.service'

export default function UseCart () {
  const [showCart, setShowCart] = useState(false)
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    ownProductsInCart().then((response) => {
      setProducts(response)
      setTotalPrice(response.reduce((sum, value) => (typeof value.price === 'number' ? (sum + value.price * value.quantity) : sum), 0))
    })
  }, [])

  const onAdd = (qty, name) => toast.success(`${qty} ${name} added to the cart.`)

  return { showCart, setShowCart, products, totalPrice, onAdd, Toaster }
}
