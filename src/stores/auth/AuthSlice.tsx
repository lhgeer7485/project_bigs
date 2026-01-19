import type { StateCreator } from "zustand/vanilla";
import type { AuthType } from "./AuthType.ts";

export const AuthSlice: StateCreator<AuthType> = (set) => ({
  accessToken: "",
  refreshToken: "",

  setAccessToken: (newToken: string) => set({ accessToken: newToken }),
  setRefreshToken: (newToken: string) => set({ refreshToken: newToken }),

  removeAccessToken: () => set({ accessToken: "" }),
  removeRefreshToken: () => set({ refreshToken: "" }),
});
