import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api

// Health check
export const checkHealth = async () => {
  const res = await api.get("/health")
  return res.data
}
