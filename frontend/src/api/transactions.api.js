import API from '../utils/api'

export const index = async () => {
  return await API.get('transactions');
};
