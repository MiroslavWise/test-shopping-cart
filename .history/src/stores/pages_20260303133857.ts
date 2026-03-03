import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist<IState>(
    () => ({
      total: 0,
      page: 1,
      limit: 12,
    }),
    {
      name: "pages",
      storage: createJSONStorage(() => sessionStorage),
      version: 0.1,
    },
  ),
)

export const dispatchTotalItems = (total: number) =>
  usePages.setState((state) => ({
    ...state,
    total: total,
  }))

// export const dispatchNextPage = (limit: number, total: number) => {}
// export const dispatchPrevPage = (limit: number) => {}

interface IState {
  total: number
  page: number
  limit: number
}
