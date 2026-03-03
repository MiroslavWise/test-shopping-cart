import { useQuery } from "@tanstack/react-query"
import instance from "./api"
import { useEffect } from "react"

function App() {
  const { data } = useQuery({
    queryFn: () =>
      instance({
        method: "GET",
        url: "/carts",
      }),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
  }, [data])

  return <>пРИВЕТ</>
}

export default App
