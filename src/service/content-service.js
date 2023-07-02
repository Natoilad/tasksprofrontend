// import axios from 'axios';
import { backendAPI } from './auth-service';

// export const backendAPI = axios.create({
//   baseURL: 'https://tasksprobackend.onrender.com/',
// });

export const BoardList = async () => {
  const { data } = await backendAPI.get('api/boards');
  return data;
};

export const AddBoard = async task => {
  const { data } = await backendAPI.post('api/boards', task);
  console.log(data);
  return data;
  
};

export const GetById = async id => {
  const { data } = await backendAPI.get(`api/boards/${id}`);
  return data;
};

export const Remove = async id => {
  const { data } = await backendAPI.delete(`api/boards/${id}`);
  return data;
};

export const PutUpdate = async (id, newData) => {
  const { data } = await backendAPI.put(`api/boards/${id}`, newData);
  return data;
};

export const PatchUpdate = async (id, newData) => {
  const { data } = await backendAPI.patch(`api/boards/${id}`, newData);
  return data;
};

export const AddColumn = async (boardId, newData) => {
  const { data } = await backendAPI.post(`api/boards/${boardId}/columns`, {
    title: newData,
  });
  return data;
};

export const UpdateCol = async (boardId, columnId, title) => {
  console.log(title);
  const { data } = await backendAPI.patch(
    `api/boards/${boardId}/columns/${columnId}`,
    {
      title: title,
    }
  );
  return data;
};

export const RemoveCol = async (boardId, columnId) => {
  const { data } = await backendAPI.delete(
    `api/boards/${boardId}/columns/${columnId}`
  );
  return data;
};

export const BoardBackGrounds = async () => {
  const { data } = await backendAPI.get('api/backgrounds');

  return data;
};
