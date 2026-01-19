import { create } from "zustand";
import type { AuthType } from "./auth/AuthType.ts";
import { AuthSlice } from "./auth/AuthSlice.tsx";
import { persist } from "zustand/middleware";

export type Store = AuthType;

const ZustandStore = create<Store>()(
  persist(
    (...rest) => ({
      ...AuthSlice(...rest),
    }),
    {
      name: "token",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);

export default ZustandStore;
