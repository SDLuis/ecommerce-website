import { AuthProvider } from '../context/auth.context'
import NavbarComponent from '../components/navbar'
import FooterComponent from '../components/footer'
import { Toaster } from 'react-hot-toast'

export default function ProviderLayout ({ children }) {
  return (
    <AuthProvider>
      <Toaster />
      <NavbarComponent />
      {children}
      <FooterComponent />
    </AuthProvider>
  )
}
