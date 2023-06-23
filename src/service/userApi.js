import { backendAPI } from 'redux/BaseHttp/BaseHttp';

export const token = {
  set: token => {
    backendAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    backendAPI.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await backendAPI.post('users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backendAPI.post('users/login', credentials);
  console.log(data);
  return data;
};

export const logoutUser = async () => {
  return backendAPI.post('users/logout');
};

export const currentUser = async () => {
  const data = await backendAPI.get('users/current');
  return data;
};
