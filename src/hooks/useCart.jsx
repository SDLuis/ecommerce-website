import { useState, useEffect, useContext } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import UseUser from './useUser'
import { ProductContext } from '../context/product.context'
import getStripe from '../lib/getStripe'
import { ownProductsInCart, addProductsToCart, deleteProductsFromtCart, addQtyInCart, lessQtyInCart, EditQtyInCart, clearCart } from '../services/products.service'
import axios from 'axios'

export default function UseCart () {
  const { isLogged } = UseUser()
  const { showCart, setShowCart } = useContext(ProductContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [, setTotalQuantities] = useState(0)
  let foundProduct

  const reload = () => {
    setTimeout(() => {
      window.location.reload(false)
    }, 800)
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isLogged
      ? ownProductsInCart().then((response) => {
        setCartItems(response)
        setTotalPrice(response.reduce((sum, value) => (typeof value.price === 'number' ? (sum + value.price * value.quantity) : sum), 0))
      })
      : null
  }, [])

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('https://sdl-ecommerce-api.herokuapp.com/cart/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    })

    if (response.statusCode === 500) return

    const data = await response.json()

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  const buySingleItem = async (item, qty) => {
    const stripe = await getStripe()

    const response = await axios.post('https://sdl-ecommerce-api.herokuapp.com/cart/stripe/single', {
      Product_ID: item.Product_ID,
      Product_Name: item.Product_Name,
      price: item.price,
      quantity: qty,
      img: item.img
    })

    if (response.statusCode === 500) return

    const data = await response.data

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  const ClearCart = async () => {
    toast.promise(
      clearCart()
      ,
      {
        loading: 'Loading...',
        success: <b>Thanks for your purchase!</b>,
        error: <b>Error</b>
      }
    )
  }
  const onAdd = async (id, name, price, qty, img) => {
    if (isLogged) {
      const body = { id, name, price, qty, img }
      const myCart = await ownProductsInCart()
      const sameProduct = myCart.find(p => p.Product_ID === id)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + price * qty)
      if (sameProduct) {
        toast.promise(
          addQtyInCart(sameProduct.Cart_ID, qty),
          {
            loading: 'Adding...',
            success: <b>{`${qty} ${name} added to your cart!`}</b>,
            error: <b>Error, Product(s) not added.</b>
          },
          reload()
        )
      } else {
        toast.promise(
          addProductsToCart(body),
          {
            loading: 'Adding...',
            success: <b>{`${qty} ${name} added to your cart!`}</b>,
            error: <b>Error, Product(s) not added.</b>
          },
          reload()
        )
      }
    } else {
      window.location.href = '/login'
    }
  }

  const addQty = (id, qty) => {
    addQtyInCart(id, qty).then(res => toast(`${res.message}`, { duration: 1000 }), reload())
      .catch(err => toast.error(err))
  }
  const lessQty = (id, qty) => {
    lessQtyInCart(id, qty).then(res => toast(`${res.message}`, { duration: 1000 }), reload())
      .catch(err => toast.error(err))
  }

  const editQty = async (id, qty) => {
    await EditQtyInCart(id, qty).then((res) => {
      toast(`${res.message}`,
        {
          duration: 1000
        })
    })
  }

  const onDelete = (id, name) => {
    if (isLogged) {
      deleteProductsFromtCart(id).then(() => {
        toast.success(`${name} deleted from the cart.`)
        reload()
      }).catch(err => toast.error(err))
    } else {
      window.location.href = '/login'
    }
  }
  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.Cart_ID === id)

    if (value === 'inc') {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.Cart_ID === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      )
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.Cart_ID === id) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
            return item
          })
        )
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }
  return { showCart, setShowCart, cartItems, totalPrice, ownProductsInCart, onAdd, onDelete, Toaster, addQty, lessQty, editQty, ClearCart, buySingleItem, toggleCartItemQuanitity, handleCheckout }
}
