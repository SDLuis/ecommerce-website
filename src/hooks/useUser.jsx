import { useContext, useCallback, useState } from 'react'
import Cookies from 'js-cookie'
import { authContext } from '../context/auth.context'
import { Login } from '../services/user.service'
import { toast } from 'react-hot-toast'

export default function UseUser () {
  const { jwt, setJWT } = useContext(authContext)
  const [password, setPassword] = useState('')
  const [useremail, setUseremail] = useState('')

  const checkFilledFields = useCallback(() => {
    if (useremail === '' || password === '') {
      return false
    } else {
      return true
    }
  }, [password, useremail])

  const login = useCallback(() => {
    if (checkFilledFields()) {
      return Login(useremail, password)
        .then((res) => {
          if (res.message) {
            toast.error(`${res.message}.`)
          } else {
            setJWT(res.data)
            Cookies.set('jwt2', `${res.data}`, { expires: 1 / 24 })
            toast.success('Login succesfull.')
          }
        })
        .catch(() => {
          toast.error('No se pudo Logear, intente mas tarde.')
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }
  ,
  [checkFilledFields, password, setJWT, useremail]
  )

  const logout = useCallback(() => {
    Cookies.remove('jwt2')
    setJWT(null)
    toast('Good bye', {
      icon: '👋'
    })
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    useremail,
    setUseremail,
    password,
    setPassword,
    checkFilledFields
  }
}
