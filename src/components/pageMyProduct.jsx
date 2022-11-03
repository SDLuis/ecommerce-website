/* eslint-disable array-callback-return */
import { AuthProvider } from '../context/auth.context'
import ProviderLayout from '../layouts/provider.layout'
import MyProducts from './myProducts'

export default function PageMyProducts () {
  return (
    <div>
      <AuthProvider>
        <ProviderLayout>
          <MyProducts />
        </ProviderLayout>
      </AuthProvider>
    </div>
  )
}
