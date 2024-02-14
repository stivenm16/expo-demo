import axios from 'axios'
import { ROUTES } from '../utils'

export const getAdminRequests =async  () => {
  const { data } = await axios.get(
    `http://localhost:5150/sammapi/`, 
  ).then((res)=> {
    return res
  })
  

  return data.data
}
