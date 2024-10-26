import type { AxiosInstance } from "axios";

export const task = (axios: AxiosInstance) => ({
  async create(params: any): Promise<any> {
    return axios.post("/api/tasks", params);
  },
});
