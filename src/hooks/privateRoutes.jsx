import { useEffect } from 'react'
import UseUser from './useUser'

export default function PrivateRoute ({ children }) {
  const { isAdmin } = UseUser()
  useEffect(() => {
    if (!isAdmin) {
      window.location.href = '/'
    }
  }, [])

  return children
}
