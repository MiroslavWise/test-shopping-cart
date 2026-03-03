import instance from "@/api"
import type { ICart } from "@/types/cart"

interface IRequestCarts {
  limit?: number
  skip?: number
}

export const getCarts = ({ limit = 10, skip = 0 }: IRequestCarts) => {
  return instance({
    method: "GET",
    url: "/carts",
    params: { limit, skip },
  })
}

interface IResponseListCarts {
  carts: ICart[]
  limit: number
  skip: number
  total: number
}
