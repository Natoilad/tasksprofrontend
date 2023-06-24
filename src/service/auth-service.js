import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://tasksprobackend.onrender.com/',
});

export const token = {
  set: token => {
    backendAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    backendAPI.defaults.headers.Authorization = '';
  },
};

export const registerUser = async credentials => {
  const { data } = await backendAPI.post('users/register', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backendAPI.post('users/login', credentials);
  return data;
};

export const logoutUser = async () => {
  return backendAPI.post('users/logout');
};

export const currentUser = async () => {
  const data = await backendAPI.get('users/current');
  return data;
};
