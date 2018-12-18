import api from './api'

export default {
  register: credentials => api.post('/users/register', credentials),
  login: credentials => api.post('/users/login', credentials)
}
