import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  let instance = axios.create({
    baseURL: config.public.middlewareURL ?? import.meta.env.VITE_MIDDLEWARE_URL,
    withCredentials: true,
    withXSRFToken: true,
  });

  // Request Interceptors
  instance.interceptors.request.use(
    async (request) => {
      request.headers["Accept"] = "application/json";
      request.headers["Content-Type"] = "application/json";
      // Ensuring the CSRF token is included on every request
      if (
        request.method === "post" ||
        request.method === "put" ||
        request.method === "delete"
      ) {
        await instance.get("/sanctum/csrf-cookie"); // Get CSRF cookie before the request
      }

      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle CSRF token specific errors
      if (error.response && error.response.status === 419) {
        console.error("CSRF token mismatch.");
        // Optionally trigger a token refresh
      }

      // Handle unauthorized errors
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized access detected. Redirecting to login.");
        // Redirect to login or refresh auth logic
      }

      return Promise.reject(error);
    }
  );

  // You can set the instance on the Nuxt app so it can be accessed globally via useNuxtApp
  nuxtApp.provide("axios", instance);
});
