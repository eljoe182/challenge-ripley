import API from '../utils/api'

export const getAll = async () => {
  return await API.get('account/book');
}

export const create = async () => {
  return await API.get('account/book/create');
};

export const store = async (params) => {
  return await API.post('account/book/store', params);
};
