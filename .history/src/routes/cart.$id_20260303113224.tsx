import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

import ErrorComponent from "@/components/ErrorComponent"
import ItemCartProduct from "@/components/ItemCartProduct"
import LoadingComponent from "@/components/LoadingComponent"

import { getCart } from "@/services/carts"

const CartPage = () => {
  const { id } = Route.useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getCart(Number(id)),
  })

  if (isLoading) return <LoadingComponent />
  if (error) return <ErrorComponent error={error} />

  const products = data?.data?.products || []
  const userId = data?.data?.userId ?? 0

  return (
    <div className="w-full max-w-360 flex flex-col gap-4 px-4 md:px-6 lg:px-10 py-4">
      <header className="w-full flex flex-row items-center justify-between">
        <h1 className="">Корзина #{id}</h1>
        <div>{userId}</div>
      </header>
      <ul className="w-full grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((item) => (
          <ItemCartProduct key={`::${item.id}::`} {...item} />
        ))}
      </ul>
    </div>
  )
}

export const Route = createFileRoute("/cart/$id")({
  component: CartPage,
})
