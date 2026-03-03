import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

import ErrorComponent from "@/components/ErrorComponent"
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

  return (
    <div className="w-full flex flex-col gap-4">
      <h1>Корзина #{id}</h1>
      <pre>{JSON.stringify(data?.data, null, 2)}</pre>
      <ul className="w-full grid grid-cols-3"></ul>
    </div>
  )
}

export const Route = createFileRoute("/cart/$id")({
  component: CartPage,
})
