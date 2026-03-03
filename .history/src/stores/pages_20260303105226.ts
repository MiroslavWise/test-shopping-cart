/**  */
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist<IState>(() => ({}), {
    name: "pages",
    storage: createJSONStorage(() => sessionStorage),
    version: 0.1,
  }),
)

interface IState {}
