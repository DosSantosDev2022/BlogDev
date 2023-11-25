import axios from 'axios'

export const BlogApi = axios.create({
  baseURL: 'http://localhost:4000',
})
