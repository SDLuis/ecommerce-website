import { AuthProvider } from '../context/auth.context'
import { ProductProvider } from '../context/product.context'
import NavbarComponent from '../components/navbar'
import FooterComponent from '../components/footer'
import { Toaster } from 'react-hot-toast'

export default function ProviderLayout ({ children, marginTop }) {
  return (
    <AuthProvider>
      <ProductProvider>
        <Toaster />
        <NavbarComponent />
        {children}
        <FooterComponent marginTop={marginTop} />
      </ProductProvider>
    </AuthProvider>
  )
}
