import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { getCarts } from "./services/carts"

function App() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getCarts({}),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
    if (data) {
      if (data?.data) {
      }
    }
  }, [data])

  return <>пРИВЕТ</>
}

export default App
