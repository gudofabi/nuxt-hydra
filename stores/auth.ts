import type { AxiosInstance } from "axios";
import { defineStore } from "pinia";
import { auth } from "~/utils/repository/auth";

export const useAuthStore = defineStore("authStore", () => {
  const { $axios } = useNuxtApp();
  const regularRepo = auth($axios as AxiosInstance);

  /** States */
  const loading = ref(false);
  const errors = ref({});
  const message = ref("");

  /** Computed */

  /** Actions */
  const login = ($params: any) => {
    loading.value = true;
    errors.value = {};
    message.value = "";
    regularRepo
      .login($params)
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
        message.value = err.response.data.message;
      })
      .finally(() => (loading.value = false));
  };

  return {
    login,
  };
});
