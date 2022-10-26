import { useCallback, useState } from 'react'
import { register } from '../services/user.service'
import { toast } from 'react-hot-toast'

export function UseRegister () {
  const [registed, setRegisted] = useState(false)
  const [form, setForm] = useState({
    firstNameReg: '',
    lastNameReg: '',
    useremailReg: '',
    passwordReg: ''
  })

  const checkFilledFields = useCallback(() => {
    if (
      form.firstNameReg === '' ||
      form.lastNameReg === '' ||
      form.useremailReg === '' ||
      form.passwordReg === ''
    ) {
      return false
    } else {
      return true
    }
  }, [form.firstNameReg, form.lastNameReg, form.passwordReg, form.useremailReg])

  const Register = useCallback(() => {
    if (checkFilledFields()) {
      return register(form)
        .then((response) => {
          if (response.message) {
            toast.error('Este email no esta disponible. Por favor intente con otro.')
          } else {
            toast.success('Registro exitoso, redirigiendo...')
            setRegisted(true)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }, [checkFilledFields, form])

  return { Register, isRegister: Boolean(registed), form, setForm }
}
