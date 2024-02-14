import axios from 'axios'
import { formRegister } from '../utils/fakeResponses'
import { ROUTES } from '../utils'

export const getFormFields = async () => {
  // Replace this with your actual implementation to retrieve the form fields
  return await axios.get(
    `http://localhost:5150/sammapi/${ROUTES.GET_FORM_FIELDS}`, 
  )
}
