/* eslint-disable array-callback-return */
import { AuthProvider } from '../context/auth.context'
import ProviderLayout from '../layouts/provider.layout'
import MyProducts from './myProducts'
import PrivateRoute from '../hooks/privateRoutes'

export default function PageMyProducts () {
  return (
    <div>
      <AuthProvider>
        <ProviderLayout>
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        </ProviderLayout>
      </AuthProvider>
    </div>
  )
}
