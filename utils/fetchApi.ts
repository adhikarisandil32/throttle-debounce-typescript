const fetchApi = (endpoint: string, options: {} = {}) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, options)
}

export { fetchApi }
