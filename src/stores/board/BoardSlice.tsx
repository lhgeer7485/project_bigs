import type { StateCreator } from "zustand/vanilla";
import type { BoardType } from "./BoardType.ts";

export const BoardSlice: StateCreator<BoardType> = (set) => ({
  page: 0,

  setPage: (newPage: number) => set({ page: newPage }),
});
