import ProviderLayout from '../layouts/provider.layout'
import EditProducts from './editProduct'

import React from 'react'

export default function PageAddProduct ({ id }) {
  return (
    <ProviderLayout>
      <EditProducts id={id} />
    </ProviderLayout>
  )
}
