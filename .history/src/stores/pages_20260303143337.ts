import { ELimit } from "@/constants/limit"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist<IState>(
    () => ({
      total: 0,
      page: 1,
      limit: ELimit._10,
    }),
    {
      name: "pages",
      storage: createJSONStorage(() => sessionStorage),
      version: 0.1,
    },
  ),
)

export const dispatchTotalItems = (total: number) => usePages.setState((state) => ({ ...state, total }))
export const dispatchPage = (page: number) => usePages.setState((state) => ({ ...state, page }))

// export const dispatchNextPage = (limit: number, total: number) => {}
// export const dispatchPrevPage = (limit: number) => {}

interface IState {
  total: number
  page: number
  limit: ELimit
}
