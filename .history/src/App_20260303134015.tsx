import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import ItemCart from "./components/ItemCart"
import ErrorComponent from "./components/ErrorComponent"
import { DefaultArea } from "./components/ui/default-area"
import LoadingComponent from "./components/LoadingComponent"

import { getCarts } from "./services/carts"
import { pageToParams } from "./helpers/pageToParams"
import { dispatchTotalItems, usePages } from "./stores/pages"

function App() {
  const page = usePages(({ page }) => page)
  const limit = usePages(({ limit }) => limit)
  const total = usePages(({ total }) => total)

  const { data, isLoading, error } = useQuery({
    queryFn: () => getCarts(pageToParams(page, limit)),
    queryKey: ["carts"],
  })

  useEffect(() => {
    if (data) {
      if (data?.data) {
        const total = data?.data?.total

        if (total) {
          dispatchTotalItems(total)
        }
      }
    }
  }, [data])

  if (error) return <ErrorComponent error={error} />

  const items = data?.data?.carts || []

  return (
    <DefaultArea className="md:px-6 lg:px-10">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <ul className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
          {items.map((item) => (
            <ItemCart key={`::${item.id}::`} {...item} />
          ))}
        </ul>
      )}
      {total ? <nav></nav> : null}
    </DefaultArea>
  )
}

export default App
