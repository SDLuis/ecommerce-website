import LoginComponent from './login'
import ProviderLayout from '../layouts/provider.layout'
import { AuthProvider } from '../context/auth.context'
export default function PageLogin () {
  return (
    <div>
      <AuthProvider>
        <ProviderLayout>
          <LoginComponent />
        </ProviderLayout>
      </AuthProvider>
    </div>
  )
}
