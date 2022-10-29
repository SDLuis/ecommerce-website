import Success from './success'
import ProviderLayout from '../layouts/provider.layout'

export default function PageLogin ({ clear }) {
  return (
    <div>
      <ProviderLayout>
        <Success clear={clear} />
      </ProviderLayout>
    </div>
  )
}
