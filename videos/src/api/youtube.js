import axios from 'axios';

const KEY = 'AIzaSyAF9L3CZirrH0CWQkR8So6x7JrhsM-0ZL8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY,
	},
});
