import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import ErrorComponent from "./components/ErrorComponent"
import LoadingComponent from "./components/LoadingComponent"

import { getCarts } from "./services/carts"

function App() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getCarts({ limit: 12 }),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
    if (data) {
      if (data?.data) {
      }
    }
  }, [data])

  if (isLoading) return <LoadingComponent />
  if (error) return <ErrorComponent error={error} />

  return <div className="w-full max-w-360 flex flex-col gap-4 px-4 md:px-6 lg:px-10 py-4"></div>
}

export default App
