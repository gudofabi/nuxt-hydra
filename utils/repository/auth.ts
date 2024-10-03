import type { AxiosInstance } from "axios";
import type { PasswordType, ProfileType } from "~/types/user";

export const auth = (axios: AxiosInstance) => ({
  async login(params: any): Promise<any> {
    return axios.post("/api/login", params);
  },

  async register(params: any): Promise<any> {
    return axios.post("/api/register", params);
  },
});
