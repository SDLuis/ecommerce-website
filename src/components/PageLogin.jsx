import LoginComponent from './login'
import { AuthProvider } from '../context/auth.context'
export default function PageLogin () {
  return (
    <div>
      <AuthProvider>
        <LoginComponent />
      </AuthProvider>
    </div>
  )
}
