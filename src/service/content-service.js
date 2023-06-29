// import axios from 'axios';
import { backendAPI } from './auth-service';

// export const backendAPI = axios.create({
//   baseURL: 'https://tasksprobackend.onrender.com/',
// });

export const BoardList = async () => {
  const { data } = await backendAPI.get('api/boards');
  return data;
};

export const BoardBackGrounds = async () => {
  const { data } = await backendAPI.get('api/backgrounds');
  return data;
};
