import api from './api'

export default {
  contact: (form) => api.post('/contacts/contact', form)
}
