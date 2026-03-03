import { useQuery } from "@tanstack/react-query"
import instance from "./api"
import { useEffect } from "react"
import { getCarts } from "./services/carts"

function App() {
  const { data } = useQuery({
    queryFn: () => getCarts({}),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
  }, [data])

  return <>пРИВЕТ</>
}

export default App
