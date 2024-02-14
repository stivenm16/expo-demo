import axios from 'axios'
import { ROUTES } from '../utils/endpoints'

interface Props {
  username: string
  password: string
  app: string
  version?: string | null
  idDispositivo?: string | null
}
async function getToken({username, password, app, version, idDispositivo}:Props): Promise<string> {

  const { data } = await axios.post(
    `http://localhost:5150/sammapi/${ROUTES.TOKEN}`, {
      username,
      password,
      app,
      version,
      idDispositivo
    },
  ).then((res)=> {
    return res
  })
  

  return data.data.token
}

export default getToken
