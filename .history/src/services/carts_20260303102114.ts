import instance from "@/api"

interface IRequestCarts {
    limit?: number
}

export const getCarts = ({}: IRequestCarts) => {
  return instance({
    method: "GET",
    url: "/carts",
    params: {},
  })
}
