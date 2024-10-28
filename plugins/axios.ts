import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const xsrfToken = useCookie("XSRF-TOKEN");
  const instance = axios.create({
    baseURL: config.public.middlewareURL ?? import.meta.env.VITE_MIDDLEWARE_URL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      // "X-XSRF-TOKEN": xsrfToken.value || "",
      'Accept': 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true,
  });

  // Call Sanctum to get the CSRF cookie
  // const getCsrfToken = async () => {
  //   try {
  //     await instance.get("/sanctum/csrf-cookie");
  //     console.log("CSRF cookie set:", xsrfToken.value);
  //   } catch (error) {
  //     console.error("Error fetching CSRF token:", error);
  //   }
  // };
  instance.interceptors.request.use(async (config) => {
    if ((config.method as string).toLowerCase() !== 'get') {
      await instance.get('/sanctum/csrf-cookie').then()
      console.log(await useCookie('XSRF-TOKEN').value)
      config.headers['X-XSRF-TOKEN'] = await useCookie('XSRF-TOKEN').value
    }
  
    return config
  })

  // Set the Bearer auth token.
  const setBearerToken = (token: any) => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // You can set the instance on the Nuxt app so it can be accessed globally via useNuxtApp
  nuxtApp.provide("axios", instance);
  // nuxtApp.provide("getCsrfToken", getCsrfToken);
  nuxtApp.provide("setBearerToken", setBearerToken);
});
