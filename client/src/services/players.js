import api from './api-helper';

export const getAllPlayers = async (teamId) => {
  const resp = await api.get(`/teams/${teamId}/players`);
  return resp.data;
}

export const getOnePlayer = async (id) => {
  const resp = await api.get(`/teams/:id/players/${id}`);
  return resp.data;
}

export const createPlayer = async (teamId, playerData) => {
  const resp = await api.post(`/teams/${teamId}/players`, { player: playerData });
  return resp.data;
}

export const updatePlayer = async (id, playerData, teamId) => {
  const resp = await api.put(`/teams/${teamId}/players/${id}`, { player: playerData });
  return resp.data;
}

export const deletePlayer = async (id, teamId) => {
  const resp = await api.delete(`/teams/${teamId}/players/${id}`);
  return resp
}

