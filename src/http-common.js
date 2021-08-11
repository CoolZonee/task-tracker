import axios from 'axios';

export default axios.create({
    baseURL: 'https://personalwebbackend.herokuapp.com/api',
    header: {
        "Content-type": "application/json"
    }
});