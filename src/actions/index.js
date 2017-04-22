import axios from 'axios';

const ROOT_URL = `http://localhost:3000/api`;
const axiosInstance = axios.create({
  baseURL: ROOT_URL
});

export function initializeApp(){
  const request = axiosInstance.request({
    url: '/get_data',
    method: 'GET',
  });
  return {
    type: 'INITIALIZE_APP',
    payload: request
  };
}