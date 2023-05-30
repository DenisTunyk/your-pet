import axios from 'axios';

export const getNews = async () => {
  try {
    const response = await axios.get('/api/news');
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
