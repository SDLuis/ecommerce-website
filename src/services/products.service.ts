/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'

const API_URL = 'https://sdl-ecommerce-api.herokuapp.com'

export const getProduct = async (): Promise<any> => {
  return await axios
    .get(`${API_URL}/products`)
    .then((response) => {
      return response.data
    })
}
export const getProductInCart = async (): Promise<any> => {
  return await axios
    .get(`${API_URL}/cart`)
    .then((response) => {
      return response.data
    })
}
export const getProductsByType = async (type: string): Promise<any> => {
  return await axios
    .get(`${API_URL}/products/${type}/list`)
    .then((response) => {
      return response.data
    })
}

export const getProductByName = async (productName: string): Promise<any> => {
  return await axios
    .get(`${API_URL}/products/productName/${productName}`)
    .then((response) => {
      return response.data
    })
}

export const postProduct = async (body: any): Promise<any> => {
  return await axios
    .post(
      `${API_URL}/produts/add`,
      {
        Product_Name: body.productName,
        Product_Type: body.productType,
        price: body.price,
        quantity: body.quantity,
        img: body.img,
        smallText: body.smallText,
        midText: body.midText,
        largeText: body.largeText,
        description: body.description
      },
      { withCredentials: true }
    )
    .then((res) => {
      return res
    })
}

export const findProducts = async (productID: number): Promise<any> => {
  return await axios
    .get(`${API_URL}/products/${productID}`)
    .then((response) => {
      return response.data
    })
}

export const ownProducts = async (): Promise<any> => {
  return await axios
    .get(`${API_URL}/products/owner`, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}

export const editProducts = async (jobID: number, body: any): Promise<any> => {
  return await axios
    .put(
      `${API_URL}/products/edit/${jobID}`,
      {
        Product_Name: body.productName,
        Product_Type: body.productType,
        price: body.price,
        quantity: body.quantity,
        img: body.img,
        smallText: body.smallText,
        midText: body.midText,
        largeText: body.largeText,
        description: body.description
      },
      { withCredentials: true }
    )
    .then((response) => {
      return response.data
    })
}

export const deleteProducts = async (productsID: number): Promise<any> => {
  return await axios
    .delete(`${API_URL}/products/delete/${productsID}`, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}
