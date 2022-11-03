/* global FormData */
import { findProducts, editProducts } from '../services/products.service'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function UseEditProducts ({ id }) {
  const [formData, setFormData] = useState({
    Product_Name: '',
    Product_Type: '',
    price: '',
    quantity: '',
    img: '',
    smallText: '',
    midText: '',
    largeText: '',
    description: ''
  })

  useEffect(() => {
    findProducts(id).then((products) => {
      setFormData({
        ...formData,
        Product_Name: products.Product_Name,
        Product_Type: products.Product_Type,
        price: products.price,
        quantity: products.quantity,
        img: products.img,
        smallText: products.smallText,
        midText: products.midText,
        largeText: products.largeText,
        description: products.description
      })
    })
  }, [id])

  async function editProduct (formData) {
    const body = new FormData()
    body.append('Product_Name', formData.Product_Name)
    body.append('Product_Type', formData.Product_Type)
    body.append('price', formData.price)
    body.append('quantity', formData.quantity)
    body.append('image', formData.img)
    body.append('smallText', formData.smallText)
    body.append('midText', formData.midText)
    body.append('largeText', formData.largeText)
    body.append('description', formData.description)
    return await editProducts(id, body).then(res => toast.success(`${res.message}`))
  }
  return { formData, setFormData, editProduct }
}
