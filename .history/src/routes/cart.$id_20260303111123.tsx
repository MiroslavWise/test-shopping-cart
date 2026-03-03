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

  return (
    <div>
      <h1>Корзина #{id}</h1>
      <pre>{JSON.stringify(data?.data, null, 2)}</pre>
    </div>
  )
}

export const Route = createFileRoute("/cart/$id")({
  component: CartPage,
})
