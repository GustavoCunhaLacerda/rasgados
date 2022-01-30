import _axios, { AxiosInstance } from 'axios';
import { attachInterceptors } from '../middleware/interceptors';

function axiosBuilder(): AxiosInstance {
  const axios = _axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
  });

  const axiosWithInterceptors = attachInterceptors(axios);

  return axiosWithInterceptors;
}

export const axios = axiosBuilder();
