import RegisterComponent from './register'
import ProviderLayout from '../layouts/provider.layout'

export default function PageLogin () {
  return (
    <div>
      <ProviderLayout marginTop='mt-[10px]'>
        <RegisterComponent />
      </ProviderLayout>
    </div>
  )
}
