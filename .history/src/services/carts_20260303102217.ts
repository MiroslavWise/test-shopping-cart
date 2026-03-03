import instance from "@/api"

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

