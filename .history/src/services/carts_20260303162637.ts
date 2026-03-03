import instance from "@/api"
import type { ICart, IPutProduct } from "@/types/cart"
import type { AxiosResponse } from "axios"

export interface IRequestCarts {
  limit: number
  skip: number
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

export const putCart = (id: number, products: IPutProduct[]) => {
  return instance.put<any, AxiosResponse<ICart, any, {}>>(
    `/carts/${id}`,
    {
      merge: true,
      products: products,
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
