import React, { useState, useContext } from 'react'
import Cookies from 'js-cookie'

const authContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [jwt, setJWT] = useState(
    () => Cookies.get('jwt2')
  )
  const [role, setRole] = useState(
    () => Cookies.get('e-role')
  )

  return (
    <authContext.Provider value={{ jwt, setJWT, role, setRole }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

export { authContext }
