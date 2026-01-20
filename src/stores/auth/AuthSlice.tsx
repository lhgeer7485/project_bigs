import type { StateCreator } from "zustand/vanilla";
import type { AuthType } from "./AuthType.ts";

export const AuthSlice: StateCreator<AuthType> = (set, get) => ({
  accessToken: "",
  refreshToken: "",

  setAccessToken: (newToken: string) => set({ accessToken: newToken }),
  setRefreshToken: (newToken: string) => set({ refreshToken: newToken }),

  removeAccessToken: () => set({ accessToken: "" }),
  removeRefreshToken: () => set({ refreshToken: "" }),

  username: "",
  name: "",
  loginUsername: "",
  loginName: "",
  userList: {},

  setUsername: (newUsername: string) => set({ username: newUsername }),
  setName: (newName: string) => set({ name: newName }),
  setLoginUsername: (newLoginUsername: string) =>
    set({ loginUsername: newLoginUsername }),
  setLoginName: (newLoginName: string) => set({ loginName: newLoginName }),

  addUser: () => {
    const { username, name, userList } = get();
    set({ userList: { ...userList, [username]: name } });
  },
  getLoginName: () => {
    const { loginUsername, userList } = get();
    return userList[loginUsername];
  },
});
