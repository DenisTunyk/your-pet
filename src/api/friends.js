import axios from 'axios';

export const getFriends = async () => {
  const response = await axios.get('/api/sponsors');
  return response;
};
