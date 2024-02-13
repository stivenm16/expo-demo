import axios, { InternalAxiosRequestConfig } from 'axios'
import getToken from '../services/getToken.service'

const updateHeader = async (request: InternalAxiosRequestConfig<any>) => {
  request.headers['Content-Type'] = 'application/json'

  const token = await getToken()
  request.headers['Authorization'] = `Bearer ${token}`
  return request
}
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5150/sammapi',
})

axiosInstance.interceptors.request.use((request) => {
  return updateHeader(request)
})

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('response', response)

    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
