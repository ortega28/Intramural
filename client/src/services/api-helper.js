import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://intramural-api.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export default api;
