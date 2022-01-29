import _axios from "axios";
import { setupInterceptorsTo } from "../middleware/interceptors";

const BASE_URL="https://ifb-rasgados-backend.herokuapp.com/"

function axiosBuilder() {
  const axios = setupInterceptorsTo(
    _axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
    })
  );

  return axios;
}

export default axiosBuilder();
