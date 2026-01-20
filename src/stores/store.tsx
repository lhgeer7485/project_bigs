import { create } from "zustand";
import type { AuthType } from "./auth/AuthType.ts";
import { AuthSlice } from "./auth/AuthSlice.tsx";
import { persist } from "zustand/middleware";
import { BoardSlice } from "./board/BoardSlice.tsx";
import type { BoardType } from "./board/BoardType.ts";

export type Store = AuthType & BoardType;

const ZustandStore = create<Store>()(
  persist(
    (...rest) => ({
      ...AuthSlice(...rest),
      ...BoardSlice(...rest),
    }),
    {
      name: "token",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        userList: state.userList,
      }),
    },
  ),
);

export default ZustandStore;
