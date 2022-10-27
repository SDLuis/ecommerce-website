import React, { useState } from 'react'

const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <ProductContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext }
