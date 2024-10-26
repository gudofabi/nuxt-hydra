import type { AxiosInstance } from "axios";
import { defineStore } from "pinia";
import { auth } from "~/utils/repository/auth";

export const useAuthStore = defineStore("authStore", () => {
  const { $axios, $getCsrfToken, $setBearerToken } = useNuxtApp();
  // Cast $getCsrfToken to the correct type (a function that returns a Promise)
  const getCsrfToken = $getCsrfToken as () => Promise<void>;
  const setBearerToken = $setBearerToken as any;
  const regularRepo = auth($axios as AxiosInstance);

  /** States */
  const loading = ref(false);
  const errors = ref({});
  const message = ref("");

  /** Actions */
  const login = async ($params: any) => {
    loading.value = true;
    errors.value = {};
    message.value = "";

    try {
      // Ensure the CSRF token is set before making any request
      await getCsrfToken();

      // Proceed with login request
      const res = await regularRepo.login($params);
      setBearerToken(res.data.token);
      // Handle successful login (e.g., set token, user info, etc.)
    } catch (err: any) {
      console.log(err);
      // Handle error (e.g., display message, validation errors)
      errors.value = err.response?.data?.errors || {};
      message.value = err.response?.data?.message || "An error occurred";
    } finally {
      loading.value = false;
    }
  };

  return {
    login,
    loading,
    errors,
    message,
  };
});
