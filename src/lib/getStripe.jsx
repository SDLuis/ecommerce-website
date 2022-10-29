import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51Ly3S2LG2eOABxM7zLlTCxyGFXU7l67WrtdCzIkhGWVsfYwjVRh1Dgetc5dE6jspBFSMdxvKDHzww3unmPLzsUTr00C48GkXKn')
  }

  return stripePromise
}

export default getStripe
