import axios from 'axios'
import { ROUTES } from '../utils/endpoints'

async function getToken(): Promise<string> {
  const { data } = await axios.get(
    `http://localhost:5150/sammapi/${ROUTES.TOKEN}`,
  )

  return data.token
}

export default getToken
