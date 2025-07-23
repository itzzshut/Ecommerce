import axios from "axios";

const axiosInstance = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? "http://localhost:5000/api"
			: import.meta.env.VITE_BACKEND_URL.replace(/\/$/, "") + "/api",
	withCredentials: true,
});


