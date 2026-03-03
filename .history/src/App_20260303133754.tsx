import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import ItemCart from "./components/ItemCart"
import ErrorComponent from "./components/ErrorComponent"
import { DefaultArea } from "./components/ui/default-area"
import LoadingComponent from "./components/LoadingComponent"

import { usePages } from "./stores/pages"
import { getCarts } from "./services/carts"
import { pageToParams } from "./helpers/pageToParams"

function App() {
  const page = usePages(({ page }) => page)
  const limit = usePages(({ limit }) => limit)

  const { data, isLoading, error } = useQuery({
    queryFn: () => getCarts(pageToParams(page, limit)),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
    if (data) {
      if (data?.data) {
        const total = data?.data?.total
      }
    }
  }, [data])

  if (isLoading) return <LoadingComponent />
  if (error) return <ErrorComponent error={error} />

  const items = data?.data?.carts || []

  return (
    <DefaultArea className="md:px-6 lg:px-10">
      <ul className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item) => (
          <ItemCart key={`::${item.id}::`} {...item} />
        ))}
      </ul>
    </DefaultArea>
  )
}

export default App
