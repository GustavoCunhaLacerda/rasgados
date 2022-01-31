import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

async function request(config: AxiosRequestConfig) {
  return config;
}

function requestError(error: any) {
  return error;
}

function response(config: AxiosResponse) {
  console.log(`[SUCCESS] ${config.config.url}`);
  return config;
}

async function responseError(error: any) {
  console.log(`[ERROR] ${error.config.url}`);
  return false;
}

export function attachInterceptors(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(request, requestError);
  axiosInstance.interceptors.response.use(response, responseError);
  return axiosInstance;
}
