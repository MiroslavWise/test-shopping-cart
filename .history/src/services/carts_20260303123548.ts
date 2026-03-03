import instance from "@/api"
import type { ICart } from "@/types/cart"
import type { AxiosResponse } from "axios"

interface IRequestCarts {
  limit?: number
  skip?: number
}

export const getCarts = ({ limit = 10, skip = 0 }: IRequestCarts) =>
  instance<any, AxiosResponse<IResponseListCarts, any, {}>>({
    method: "GET",
    url: "/carts",
    params: { limit, skip },
  })

export const getCart = (id: number) =>
  instance<any, AxiosResponse<ICart, any, {}>>({
    method: "GET",
    url: `/carts/${id}`,
  })

export const putCart = (id: number) => {
  return instance.put(
    `/carts/${id}`,
    {
      merge: true,
      products: [],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

interface IResponseListCarts {
  carts: ICart[]
  limit: number
  skip: number
  total: number
}
