import axios from 'axios'
import { ROUTES } from '../utils'
import axiosInstance from '../interceptors/axios.interceptors'

export const getAdminRequests =async  () => {
  return await axiosInstance.get(
    `/${ROUTES.GET_REQUESTS}`, 
  )
  
}
