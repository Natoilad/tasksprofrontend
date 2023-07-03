import { backendAPI } from './auth-service';

export const GetTasksList = async () => {
  const { data } = await backendAPI.get('api/tasks');
  return data;
};

export const AddTask = async ({
  userId: { owner: userId },
  boardId: { id: boardId },
  columnId: { columnId },
  deadline,
  description,
  priority,
  title,
}) => {
  const newTask = {
    title,
    priority,
    description,
    deadline,
    userId,
    boardId,
    columnId,
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

export const UpdateTaskById = async newData => {
  const request = {
    ...(newData.task || newData.columnId),
  };
  const { data } = await backendAPI.put(`api/tasks/${newData.id}`, request);
  return data;
};

export const Transfer = async ({ id, columnId }) => {
  const { data } = await backendAPI.patch(`api/tasks/${id}`, { columnId });
  return data;
};

export const GetByColumnId = async columnId => {
  const { data } = await backendAPI.get(`api/tasks/column/${columnId}`);
  return data;
};
