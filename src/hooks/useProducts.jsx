import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { getProduct, ownProducts, deleteProducts } from '../services/products.service'
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

  function deleteProduct (id, product) {
    toast.promise(
      deleteProducts(id).then(() => {
        const newEntryProducts = myProducts.filter((item) => item.Product_ID !== product.Product_ID)
        setMyProducts(newEntryProducts)
      }),
      {
        loading: 'Removing...',
        success: <b>{`${product.Product_Name} deleted`}</b>,
        error: <b>Error</b>
      }
    )
  }

  return { products, myProducts, loading, deleteProduct }
}
