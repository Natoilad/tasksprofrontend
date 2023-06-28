import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://tasksprobackend.onrender.com/',
});

export const BoardList = async () => {
  const { data } = await backendAPI.get('api/boards');

  return data;
};
