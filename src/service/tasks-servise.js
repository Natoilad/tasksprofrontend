import { backendAPI } from './auth-service';

export const GetTasksList = async () => {
  const { data } = await backendAPI.get('api/tasks');
  return data;
};

export const AddTask = async newData => {
  const newTask = {
    title: 'test',
    priority: 'high',
  };
  const { data } = await backendAPI.post('api/tasks', newTask);
  return data;
};

export const GetById = async id => {
  const { data } = await backendAPI.get(`api/tasks/${id}`);
  return data;
};

export const DeleteTask = async id => {
  const { data } = await backendAPI.delete(`api/tasks/${id}`);
  return data;
};

export const UpdateTaskById = async (id, newData) => {
  const { data } = await backendAPI.put(`api/tasks/${id}`, newData);
  return data;
};

export const GetByColumnId = async columnId => {
  const { data } = await backendAPI.get(`api/tasks/column/${columnId}`);
  return data;
};
