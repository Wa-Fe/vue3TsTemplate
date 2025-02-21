import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60000 // 请求的超时时间
})

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
