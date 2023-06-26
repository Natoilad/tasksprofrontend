import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://tasksprobackend.onrender.com/',
});

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const token = {
  set: token => {
    backendAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    backendAPI.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async credentials => {
  const { data } = await backendAPI.post('auth/register', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backendAPI.post('auth/login', credentials);
  return data;
};

export const logoutUser = async () => {
  return backendAPI.post('auth/logout');
};

export const currentUser = async () => {
  const data = await backendAPI.get('auth/current');
  return data;
};
