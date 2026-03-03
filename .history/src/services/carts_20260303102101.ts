import instance from "@/api"

interface IRequestCarts {}

export const getCarts = ({}: IRequestCarts) => {
  return instance({
    method: "GET",
    url: "/carts",
    params: {},
  })
}
