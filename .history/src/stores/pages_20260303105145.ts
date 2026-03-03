import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const usePages = create(
  persist(() => ({}), {
    name: "pages",
    storage: createJSONStorage(() => sessionStorage),
    version: 0.1,
  }),
)
