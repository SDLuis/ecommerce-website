/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'

const API_URL = 'https://sdl-ecommerce-api.up.railway.app'

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
      `${API_URL}/products/add`, body, { withCredentials: true })
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

export const findProductsInCart = async (id: number): Promise<any> => {
  return await axios
    .get(`${API_URL}/cart/${id}`)
    .then((response) => {
      return response.data
    })
}

export const addQtyInCart = async (id: number, qty: number): Promise<any> => {
  return await axios
    .put(`${API_URL}/cart/addingquantity/${id}`, {
      quantity: qty
    }, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}
export const EditQtyInCart = async (id: number, qty: number): Promise<any> => {
  return await axios
    .put(`${API_URL}/cart/edit/${id}`, {
      quantity: qty
    }, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}

export const lessQtyInCart = async (id: number, qty: number): Promise<any> => {
  return await axios
    .put(`${API_URL}/cart/buy/${id}`, {
      quantity: qty
    }, {
      withCredentials: true
    })
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

export const ownProductsInCart = async (): Promise<any> => {
  return await axios
    .get(`${API_URL}/cart/owner`, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}

export const addProductsToCart = async (body: any): Promise<any> => {
  return await axios
    .post(`${API_URL}/cart/add`,
      {
        Product_ID: body.id,
        Product_Name: body.name,
        price: body.price,
        quantity: body.qty,
        img: body.img
      },
      {
        withCredentials: true
      })
    .then((response) => {
      return response.data
    })
}

export const deleteProductsFromtCart = async (id: any): Promise<any> => {
  return await axios
    .delete(`${API_URL}/cart/delete/${id}`,
      {
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
      body,
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
export const clearCart = async (): Promise<any> => {
  return await axios
    .delete(`${API_URL}/cart/clearCart`, {
      withCredentials: true
    })
    .then((response) => {
      return response.data
    })
}
