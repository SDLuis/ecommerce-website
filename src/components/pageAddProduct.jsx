import ProviderLayout from '../layouts/provider.layout'
import AddProducts from './addProduct'
import PrivateRoute from '../hooks/privateRoutes'

import React from 'react'

export default function PageAddProduct () {
  return (
    <ProviderLayout marginTop='mt-40'>
      <PrivateRoute>
        <AddProducts />
      </PrivateRoute>
    </ProviderLayout>
  )
}
