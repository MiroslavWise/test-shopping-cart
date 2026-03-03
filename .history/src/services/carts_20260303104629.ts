import instance from "@/api"
import type { ICart } from "@/types/cart"
import type { AxiosResponse } from "axios"

interface IRequestCarts {
  limit?: number
  skip?: number
}

export const getCarts = ({ limit = 10, skip = 0 }: IRequestCarts) => {
  return instance<any, AxiosResponse<IResponseListCarts, any, {}>>({
    method: "GET",
    url: "/carts",
    params: { limit, skip },
  })
}

export const getCart = (id: number) => {
  return instance<any, AxiosResponse<IResponseListCarts, any, {}>>({
    method: "GET",
    url: `/carts/${id}`,
  })
}

interface IResponseListCarts {
  carts: ICart[]
  limit: number
  skip: number
  total: number
}
