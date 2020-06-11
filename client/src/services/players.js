import api from './api-helper';

export const getAllPlayers = async (teamId) => {
  const resp = await api.get(`/teams/${teamId}/players`);
  return resp.data;
}

export const getOnePlayer = async (id) => {
  const resp = await api.get(`/team/:id/players/${id}`);
  return resp.data;
}

export const createPlayer = async (playerData) => {
  const resp = await api.post('/players', { player: playerData });
  return resp.data;
}

export const updatePlayer = async (id, playerData) => {
  const resp = await api.put(`/players/${id}`, { player: playerData });
  return resp.data;
}

export const deletePlayer = async (id) => {
  const resp = await api.delete(`/players/${id}`);
  return resp
}

