import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

import { getCart } from "@/services/carts"

const CartPage = () => {
  const { id } = Route.useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getCart(Number(id)),
  })

  if (isLoading) return <>Загрузка корзины...</>
  if (error) return <>Ошибка загрузки корзины</>

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

