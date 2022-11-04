/* global FormData */
import { postProduct } from '../services/products.service'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UsePostProducts () {
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

  async function addProduct (formData) {
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
    return await postProduct(body)
      .then(() => toast.success('Product added'))
      .catch(err => toast.error(`${err}`))
  }
  return { formData, setFormData, addProduct }
}
