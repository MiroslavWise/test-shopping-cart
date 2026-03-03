import { pageToParams } from "@/helpers/pageToParams"
import type { IRequestCarts } from "@/services/carts"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist<IState>(
    (state) => ({
      page: 1,
      limit: 12,
      params: pageToParams(),
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
  limit: number
  params: IRequestCarts
}
