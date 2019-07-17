import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID c64a4efc6ac01af003a4f73a5f2410b71c21c84c51943dd38bc18ec1fda8b2dd',
	},
});
