import axios from "axios";

const axiosInstance = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? "http://localhost:5000/api"
			: import.meta.env.VITE_BACKEND_URL + "/api",
	withCredentials: true,
});

// Intercept requests to remove leading slash from URL
axiosInstance.interceptors.request.use((config) => {
	if (config.url.startsWith("/")) {
		config.url = config.url.substring(1); // remove leading slash
	}
	return config;
});

export default axiosInstance;
