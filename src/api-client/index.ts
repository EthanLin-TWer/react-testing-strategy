import axios, { AxiosInstance } from 'axios'

export default class ApiClient {
  #client: AxiosInstance = axios.create({
    timeout: 30 * 1000,
    baseURL: process.env.SERVER_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })

  get<T>(url: string, params?: object): Promise<T> {
    return this.#client.get(url, { params }).then((response) => {
      return response.data
    })
  }
}
