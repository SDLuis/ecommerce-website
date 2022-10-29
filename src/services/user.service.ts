/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = 'https://sdl-ecommerce-api.herokuapp.com'

export const Login = async (useremail: any, password: any): Promise<any> => {
  return await axios
    .post(
      `${API_URL}/auth/login`,
      {
        email: useremail,
        password
      },
      { withCredentials: true }
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

export const register = async (body: any): Promise<any> => {
  return await axios
    .post(`${API_URL}/auth/register`, {
      First_Name: body.firstNameReg,
      Last_Name: body.lastNameReg,
      email: body.useremailReg,
      password: body.passwordReg
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}
