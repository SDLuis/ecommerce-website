import ProviderLayout from '../layouts/provider.layout'
import EditProducts from './editProduct'
import PrivateRoute from '../hooks/privateRoutes'

import React from 'react'

export default function PageAddProduct ({ id }) {
  return (
    <ProviderLayout marginTop='mt-40'>
      <PrivateRoute>
        <EditProducts id={id} />
      </PrivateRoute>
    </ProviderLayout>
  )
}
