import API from '../utils/api'

export const create = async () => {
  return await API.get('transfer/create');
};

export const store = async (params) => {
  return await API.post('transfer/store', params);
};
