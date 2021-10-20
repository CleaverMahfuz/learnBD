import axios from 'axios';
import { decrypt } from './myCrypt';

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:3000/api/v1/',
	headers: {
		Authorization: `Bearer ${decrypt()}`,
	},
	withCredentials: true,
});

export default axiosInstance;
