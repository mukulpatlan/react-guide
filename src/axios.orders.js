import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-guide-9f34b.firebaseio.com/'
});

export default instance;