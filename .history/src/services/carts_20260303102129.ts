import instance from "@/api"

interface IRequestCarts {
  limit?: number
  skip?: number
}

export const getCarts = ({ limit, skip }: IRequestCarts) => {
  return instance({
    method: "GET",
    url: "/carts",
    params: {},
  })
}
