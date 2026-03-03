import type { IRequestCarts } from "@/services/carts"

export const pageToParams = (page: number, limit: number): IRequestCarts => {
  return {
    limit: limit,
    skip: (page - 1) * limit,
  }
}
