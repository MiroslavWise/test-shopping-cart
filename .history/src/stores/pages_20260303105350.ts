import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist<IState>(
    () => ({
      page: 1,
    }),
    {
      name: "pages",
      storage: createJSONStorage(() => sessionStorage),
      version: 0.1,
    },
  ),
)

// export const dispatchNextPage = (limit: number, total: number) => {}
// export const dispatchPrevPage = (limit: number) => {}

interface IState {
  page: number
}
