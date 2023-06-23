import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
