import axios from 'axios'

const instancia = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

instancia.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('access_token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
  
    (error) => {
      return Promise.reject(error)
    }
  )

  

export default instancia