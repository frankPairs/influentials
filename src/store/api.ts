import axios from 'axios';

const BASE_URL = 'https://9370fa24-a918-4d84-8c0e-de3d38971a35.mock.pstmn.io/api/v2/influencers';

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
