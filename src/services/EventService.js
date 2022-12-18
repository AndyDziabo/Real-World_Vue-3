import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'appliccation/json',
    'Content-Type': 'application/jaon'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
