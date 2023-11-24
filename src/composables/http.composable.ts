import type { IHttpConfig } from '@/types/composables/http.interface'
import axios from 'axios'

export const useHttp = (httpConfig?: IHttpConfig) => {
  const axiosOptions = {
    baseURL: httpConfig?.baseURL || import.meta.env.VITE_API,
    headers: httpConfig?.headers || {}
  }
  const instance = axios.create(axiosOptions)
  return instance
}
