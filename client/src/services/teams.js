import api from './api-helper';

export const getAllTeams = async () => {
  const resp = await api.get('/teams');
  return resp.data;
}