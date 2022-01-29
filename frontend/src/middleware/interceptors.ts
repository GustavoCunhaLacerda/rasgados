async function request(config: any) {
  return config;
}

function requestError(error: any) {
  return error;
}

function response(config: any) {
  console.log(`[SUCCESS] ${config.config.url}`);
  return config;
}

async function responseError(error: any) {
  console.log(`[ERROR] ${error.config.url}`);
  return false;
}

export function setupInterceptorsTo(axiosInstance: any) {
  axiosInstance.interceptors.request.use(request, requestError);
  axiosInstance.interceptors.response.use(response, responseError);
  return axiosInstance;
}
