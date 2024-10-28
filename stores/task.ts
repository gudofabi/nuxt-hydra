import type { AxiosInstance } from "axios";
import { defineStore } from "pinia";
import { task } from "~/utils/repository/task";

export const useTaskStore = defineStore("taskStore", () => {
  const { $axios } = useNuxtApp();

  const taskRepo = task($axios as AxiosInstance);

  /** States */
  const loading = ref(false);
  const errors = ref({});
  const message = ref("");

  /** Computed */

  /** Actions */
  const create = async ($params: any) => {
    loading.value = true;
    errors.value = {};
    message.value = "";
    try {
      // Ensure the CSRF token is set before making any request
      return await taskRepo.create($params);
    } catch (error: any) {
      console.log(error);
      // Handle error (e.g., display message, validation errors)
      errors.value = error.response?.data?.errors || {};
      message.value = error.response?.data?.message || "An error occurred";
    } finally {
      loading.value = false;
    }
  };

  return {
    create,
  };
});
