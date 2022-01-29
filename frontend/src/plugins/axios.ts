import _axios from 'axios';
import { setupInterceptorsTo } from '../middleware/interceptors';

function axiosBuilder() {
  const axios = setupInterceptorsTo(
    _axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 10000,
    })
  );

  return axios;
}

export default axiosBuilder();
