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
  const onAdd = async (id, name, price, qty, img, product) => {
    if (isLogged) {
      const body = { id, name, price, qty, img }
      const myCart = await ownProductsInCart()
      const sameProduct = myCart.find(p => p.Product_ID === id)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + price * qty)

      if (sameProduct) {
        toast.promise(
          addQtyInCart(sameProduct.Cart_ID, qty).then(() => {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty)
            // eslint-disable-next-line array-callback-return
            const updatedCartItems = myCart.map((cartProduct) => {
              if (cartProduct.Product_ID === product.Product_ID) {
                return {
                  ...cartProduct,
                  quantity: cartProduct.quantity + qty
                }
              }
            })
            setCartItems(updatedCartItems)
          }),
          {
            loading: 'Adding...',
            success: <b>{`${qty} ${name} added to your cart!`}</b>,
            error: <b>Error, Product(s) not added.</b>
          }
        )
      } else {
        toast.promise(
          addProductsToCart(body).then(() => {
            product.quantity = qty
            setCartItems([...cartItems, { ...product }])
          }),
          {
            loading: 'Adding...',
            success: <b>{`${qty} ${name} added to your cart!`}</b>,
            error: <b>Error, Product(s) not added.</b>
          }
        )
      }
    } else {
      window.location.href = '/login'
    }
  }

  const onRemove = (product) => {
    toast.promise(
      deleteProductsFromtCart(product.Cart_ID).then(() => {
        foundProduct = cartItems.find((item) => item.Product_ID === product.Product_ID)
        const newCartItems = cartItems.filter((item) => item.Product_ID !== product.Product_ID)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
      })
      ,
      {
        loading: 'Loading...',
        success: <b>{`${product.Product_Name} deleted from the cart.`}</b>,
        error: <b>Error</b>
      }
    )
  }

  const addQty = (id, qty) => {
    addQtyInCart(id, qty).then(res => toast(`${res.message}`, { duration: 1000 }))
      .catch(err => toast.error(err))
  }
  const lessQty = (id, qty) => {
    lessQtyInCart(id, qty).then(res => toast(`${res.message}`, { duration: 1000 }))
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
  return { showCart, setShowCart, cartItems, totalPrice, ownProductsInCart, onAdd, onRemove, Toaster, addQty, lessQty, editQty, ClearCart, buySingleItem, toggleCartItemQuanitity, handleCheckout }
}
